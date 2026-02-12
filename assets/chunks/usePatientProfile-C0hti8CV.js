import { K as modalController, s as defineComponent, y as openBlock, O as createBlock, a2 as onMounted, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, bd as IonCardContent, N as IonButton, L as IonIcon, bG as addOutline, a5 as createTextVNode, f as ref, z as createElementBlock, M as IonSpinner, J as Fragment, R as renderList, bK as IonCard, a4 as normalizeClass, D as toDisplayString, bT as trashOutline, H as createCommentVNode, W as alertController, cB as toastController, a7 as IonLabel, aA as IonCol, aq as IonItem, x as resolveComponent, w as watch, eb as time, ak as IonDatetime, ba as IonCardTitle, bb as IonCardHeader, af as IonRow, au as script, ef as pencilOutline, bH as saveOutline, G as closeCircleOutline, b0 as locationOutline, bv as personCircleOutline, ae as IonCheckbox, dz as phonePortraitOutline, aS as medicalOutline, c as computed, ap as IonList, aD as IonToolbar, aE as IonTitle, be as IonButtons, I as IonHeader, aG as IonContent, bf as IonFooter, aL as useRouter, cI as idCardOutline, Q as alertCircleOutline, a6 as IonInput, by as IonText, P as normalizeStyle, dA as domtoimage, X as Capacitor } from './vendor-DrpjccQs.js';
import { b4 as confirmModal, u as useDemographicsStore, y as StandardValidations, n as icons, z as StandardForm, r as StandardModal, C as useExposeFromStandardForm, b5 as RelationshipService, G as toastSuccess, t as toastWarning, o as createModal, _ as _export_sfc, k as alertConfirmation, a4 as popoverConfirmation, B as BasicInputField, b3 as useOutcomeStore, g as getPouchDBRecords, aI as _sfc_main$f, F as DynamicButton, $ as SelectFacility, V as LocationService, aY as AppEncounterService, a as useProgramStore, aK as useClinicalDaysStore, aL as setValueProps, aB as ListPicker, ai as ProgramService, S as Service, H as HisDate, c as HorizontalLine, aC as areFieldsValid, x as toastDanger, aD as getFieldsValuesObj, K as ObservationService, b as EncounterTypeId, P as PatientService, J as savePatientRecord, Z as printLabel, aM as PrintoutService, b6 as printArtVisitLbl } from '../index-Cz8Kw0vP.js';
import { R as Registration, u as useRelationships } from './Registration-DXl8DHcU.js';
import { s as storeToRefs } from './pinia-CWrBOO3c.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-CWd9CdTB.js';
import { u as useWardsStore } from './wardsStore-izWSgRbV.js';
import { l as lodashExports } from './lodash-C2jZK40L.js';

function useConfirm() {
  const showConfirm = async (message) => {
    const modal = await modalController.create({
      component: confirmModal,
      componentProps: { message },
      // Optional: use a custom class to make it look like a dialog
      cssClass: "otherVitalsModal"
    });
    await modal.present();
    return new Promise((resolve) => {
      const onConfirm = () => {
        modal.removeEventListener("confirm", onConfirm);
        resolve(true);
      };
      const onCancel = () => {
        modal.removeEventListener("cancel", onCancel);
        resolve(false);
      };
      modal.addEventListener("confirm", onConfirm);
      modal.addEventListener("cancel", onCancel);
      modal.onDidDismiss().then(() => resolve(false));
    });
  };
  return { showConfirm };
}

const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "personalInformationModal",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Registration, { editMode: true });
    };
  }
});

const _hoisted_1$7 = { class: "ion-padding-horizontal" };
const _hoisted_2$7 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "AddRelationshipModal",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const { formRef } = useExposeFromStandardForm();
    const relationships = ref("");
    const guardian = ref();
    const regForm = ref([]);
    const { getRelationships } = useRelationships();
    regForm.value = [
      {
        componentType: "multiSelectInputField",
        header: "Relationship to patient",
        name: "relationship",
        trackBy: "trackByID",
        icon: icons.search,
        validation: StandardValidations.required,
        options: () => {
          return relationships.value;
        },
        disabled: () => {
          return !relationships.value;
        }
      }
    ];
    const saveData = async () => {
      const formData = formRef.value?.getFormValues();
      const guardianID = formData?.relationship?.id;
      if (formRef.value?.validateForm() == null && guardian.value && guardianID) {
        await RelationshipService.createRelationship(guardian.value, patient.value, guardianID);
        toastSuccess("Relationship added successfully.");
        modalController.dismiss();
      } else toastWarning("Please fill all required fields correctly.");
    };
    const handlePatientChange = async (test, value) => {
      if (value) {
        guardian.value = value;
      }
    };
    onMounted(async () => {
      if (patient.value) {
        relationships.value = await getRelationships(patient.value?.personInformation.gender);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, { title: "Add Relationship" }, {
        "top-buttons": withCtx(() => [
          createVNode(unref(IonButton), {
            onClick: saveData,
            color: "primary",
            fill: "solid",
            class: "add-btn-header"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                slot: "start",
                icon: unref(addOutline)
              }, null, 8, ["icon"]),
              _cache[1] || (_cache[1] = createTextVNode(" Save ", -1))
            ]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$7, [
            createBaseVNode("div", null, [
              createVNode(FindRegisterPatient, {
                onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => handlePatientChange("patient", value))
              }),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("div", _hoisted_2$7, [
                createVNode(unref(IonCardContent), null, {
                  default: withCtx(() => [
                    createVNode(StandardForm, {
                      formData: regForm.value,
                      ref_key: "formRef",
                      ref: formRef
                    }, null, 8, ["formData"])
                  ]),
                  _: 1
                })
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});

const _hoisted_1$6 = { class: "ion-padding-horizontal" };
const _hoisted_2$6 = {
  key: 0,
  class: "ion-text-center ion-padding"
};
const _hoisted_3$5 = {
  key: 1,
  class: "cards-container"
};
const _hoisted_4$4 = { class: "info-wrapper" };
const _hoisted_5$3 = { class: "avatar-section" };
const _hoisted_6$3 = { class: "text-section" };
const _hoisted_7$3 = { class: "rel-name" };
const _hoisted_8$3 = { class: "rel-meta" };
const _hoisted_9$3 = { class: "rel-meta" };
const _hoisted_10$3 = { class: "action-section" };
const _hoisted_11$3 = {
  key: 0,
  class: "ion-text-center ion-padding"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "RelationshipManagementModal",
  setup(__props) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const relationships = ref([]);
    const isLoading = ref(true);
    const fetchRelationships = async () => {
      try {
        isLoading.value = true;
        const plainPatientData = JSON.parse(JSON.stringify(patient.value.guardianInformation));
        const data = [...plainPatientData?.unsaved, ...plainPatientData?.saved];
        relationships.value = Array.isArray(data) ? data : [];
      } catch (e) {
        console.error("Fetch error:", e);
      } finally {
        isLoading.value = false;
      }
    };
    const isSpouse = (role) => {
      const r = role?.toLowerCase() || "";
      return r.includes("spouse") || r.includes("partner") || r.includes("wife") || r.includes("husband");
    };
    const getAccentClass = (role) => {
      const r = role?.toLowerCase() || "";
      if (isSpouse(r)) return "accent-spouse";
      if (r.includes("mother") || r.includes("father")) return "accent-parent";
      if (r.includes("child") || r.includes("son") || r.includes("daughter")) return "accent-child";
      return "accent-default";
    };
    const getInitials = (rel) => {
      if (!rel) return "?";
      const given = rel.given_name?.[0] || "";
      const family = rel.family_name?.[0] || "";
      return `${given}${family}`.toUpperCase() || "?";
    };
    const formatDate = (dateStr) => {
      if (!dateStr) return "N/A";
      try {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
      } catch {
        return "N/A";
      }
    };
    const confirmVoid = async (rel) => {
      const alert = await alertController.create({
        header: "Confirm Removal",
        message: `Remove ${rel.given_name} ${rel.family_name} as ${rel.relationship_type?.guardian_is_to_patient || "relationship"}?`,
        cssClass: "custom-alert",
        buttons: [
          { text: "Cancel", role: "cancel" },
          {
            text: "Delete",
            role: "destructive",
            handler: () => voidRelationship(rel.relationship_id)
          }
        ]
      });
      await alert.present();
    };
    const voidRelationship = async (id) => {
      relationships.value = relationships.value.filter((r) => r.relationship_id !== id);
      const toast = await toastController.create({
        message: "Relationship deleted",
        duration: 1500,
        color: "dark",
        position: "bottom"
      });
      await toast.present();
    };
    const openAddModal = () => {
      modalController.dismiss();
      createModal(_sfc_main$d, {
        class: "large-medium-width-modal"
      });
    };
    onMounted(fetchRelationships);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Relationship Management",
        subtitle: relationships.value.length + " active relationships"
      }, {
        "top-buttons": withCtx(() => [
          createVNode(unref(IonButton), {
            onClick: openAddModal,
            color: "primary",
            fill: "solid",
            class: "add-btn-header"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonIcon), {
                slot: "start",
                icon: unref(addOutline)
              }, null, 8, ["icon"]),
              _cache[0] || (_cache[0] = createTextVNode(" Add Relationship ", -1))
            ]),
            _: 1
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_1$6, [
            isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
              createVNode(unref(IonSpinner), {
                name: "crescent",
                color: "primary"
              }),
              _cache[1] || (_cache[1] = createBaseVNode("p", null, "Loading relationships...", -1))
            ])) : (openBlock(), createElementBlock("div", _hoisted_3$5, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(relationships.value, (rel) => {
                return openBlock(), createBlock(unref(IonCard), {
                  class: "rel-card ion-no-margin",
                  key: rel.relationship_id
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCardContent), { class: "rel-content" }, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          class: normalizeClass(["status-accent", getAccentClass(rel.relationship_type?.guardian_is_to_patient)])
                        }, null, 2),
                        createBaseVNode("div", _hoisted_4$4, [
                          createBaseVNode("div", _hoisted_5$3, [
                            createBaseVNode("div", {
                              class: normalizeClass(["initials-avatar", { "spouse-bg": isSpouse(rel.relationship_type?.guardian_is_to_patient) }])
                            }, toDisplayString(getInitials(rel)), 3)
                          ]),
                          createBaseVNode("div", _hoisted_6$3, [
                            createBaseVNode("div", {
                              class: normalizeClass(["rel-type", { "spouse-text": isSpouse(rel.relationship_type?.guardian_is_to_patient) }])
                            }, toDisplayString(rel.relationship_type?.guardian_is_to_patient || "Unknown"), 3),
                            createBaseVNode("div", _hoisted_7$3, toDisplayString(rel.given_name) + " " + toDisplayString(rel.family_name), 1),
                            createBaseVNode("div", _hoisted_8$3, [
                              createBaseVNode("span", null, [
                                _cache[2] || (_cache[2] = createBaseVNode("strong", null, "ID:", -1)),
                                createTextVNode(" " + toDisplayString(rel.national_id || "N/A"), 1)
                              ])
                            ]),
                            createBaseVNode("div", _hoisted_9$3, [
                              createBaseVNode("span", null, [
                                _cache[3] || (_cache[3] = createBaseVNode("strong", null, "Gender:", -1)),
                                createTextVNode(" " + toDisplayString(rel.gender || "N/A"), 1)
                              ]),
                              _cache[5] || (_cache[5] = createBaseVNode("span", { class: "dot" }, "•", -1)),
                              createBaseVNode("span", null, [
                                _cache[4] || (_cache[4] = createBaseVNode("strong", null, "DOB:", -1)),
                                createTextVNode(" " + toDisplayString(formatDate(rel.birthdate)), 1)
                              ])
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_10$3, [
                            createVNode(unref(IonButton), {
                              fill: "solid",
                              color: "danger",
                              class: "delete-btn",
                              onClick: ($event) => confirmVoid(rel)
                            }, {
                              default: withCtx(() => [
                                createVNode(unref(IonIcon), {
                                  slot: "icon-only",
                                  icon: unref(trashOutline)
                                }, null, 8, ["icon"])
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              relationships.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_11$3, [..._cache[6] || (_cache[6] = [
                createBaseVNode("p", { class: "text-muted" }, "No relationships found for this patient.", -1)
              ])])) : createCommentVNode("", true)
            ]))
          ])
        ]),
        _: 1
      }, 8, ["subtitle"]);
    };
  }
});

const RelationshipManagementModal = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-a23d4195"]]);

const _sfc_main$b = defineComponent({
  components: {
    IonItem,
    IonCol,
    IonLabel
  },
  data() {
    return {
      iconsContent: icons
    };
  },
  props: {
    displayData: {
      type: Array,
      default: []
    }
  },
  methods: {
    highlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "#006401";
      }
      this.highlightActionBtns(item);
    },
    undoHighlightItem(item) {
      const el = document.getElementById(item + "_lbl");
      if (el) {
        el.style.color = "rgb(0,0,0)";
      }
      this.undohighlightActionBtns(item);
    },
    highlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
    },
    undohighlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
    },
    asignLblID(num) {
      return num + "_lbl";
    },
    asignSpanLblID(num) {
      return num + "_spanlbl";
    },
    async removeItemAtIndex(index, e) {
      const deleteConfirmed = await popoverConfirmation("Do you want to delete it?", e);
      if (deleteConfirmed) {
        this.$emit("update:removeItem", index);
      }
    },
    async editItemAtIndex(index, item, e) {
      const editConfirmed = await alertConfirmation("Do you want to edit it?", e);
      if (editConfirmed) {
        this.$emit("update:editItem", {
          index,
          item
        });
      }
    },
    fomartDate(date) {
      const year = date.year;
      const month = (date.month < 10 ? "0" : "") + date.month;
      const day = (date.day < 10 ? "0" : "") + date.day;
      return year + "-" + month + "-" + day;
    }
  }
});

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_icon = resolveComponent("ion-icon");
  const _component_ion_item = resolveComponent("ion-item");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.displayData, (item, index) => {
    return openBlock(), createBlock(_component_ion_item, {
      displayData: _ctx.displayData,
      class: "ionLbltp",
      key: index,
      onMousemove: ($event) => _ctx.highlightItem(index),
      onMouseout: ($event) => _ctx.undoHighlightItem(index)
    }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { class: "col-st1" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              id: _ctx.asignLblID(index),
              class: "truncate-text",
              style: { "color": "#00190E", "font-weight": "400", "font": "inter", "line-height": "21px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.type), 1)
              ]),
              _: 2
            }, 1032, ["id"])
          ]),
          _: 2
        }, 1024),
        createVNode(_component_ion_col, { class: "col-st2" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: "truncate-text",
              style: { "color": "#636363", "font-weight": "400", "font": "inter", "line-height": "21px" }
            }, {
              default: withCtx(() => [
                _cache[0] || (_cache[0] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(" " + toDisplayString(item.name) + " ", 1),
                _cache[1] || (_cache[1] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(toDisplayString(item.reason), 1),
                _cache[2] || (_cache[2] = createBaseVNode("span", { class: "spaceBetween" }, null, -1)),
                createTextVNode(toDisplayString(_ctx.fomartDate(item.date)), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        createVNode(_component_ion_col, { class: "action_buttons" }, {
          default: withCtx(() => [
            createVNode(_component_ion_label, {
              class: normalizeClass(_ctx.asignSpanLblID(index)),
              style: { "cursor": "pointer", "display": "none", "text-align": "end" },
              onClick: ($event) => _ctx.editItemAtIndex(index, item, $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  icon: _ctx.iconsContent.edit
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["class", "onClick"]),
            createVNode(_component_ion_label, {
              class: normalizeClass(_ctx.asignSpanLblID(index)),
              style: { "cursor": "pointer", "display": "none", "text-align": "end" },
              onClick: ($event) => _ctx.removeItemAtIndex(index, $event)
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_icon, {
                  icon: _ctx.iconsContent.delete
                }, null, 8, ["icon"])
              ]),
              _: 1
            }, 8, ["class", "onClick"])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, 1032, ["displayData", "onMousemove", "onMouseout"]);
  }), 128);
}
const DynamicDispositionList = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render], ["__scopeId", "data-v-4346bf77"]]);

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TimePicker",
  props: {
    place_holder: {},
    time_prop: {}
  },
  emits: ["timeUpDated"],
  setup(__props, { emit: __emit }) {
    const refTime = ref();
    const popoverProperties = ref({
      title: "Set Time",
      popoverOpen: false,
      isOpen: false,
      event: {},
      keyboardClose: false,
      popoverData: {}
    });
    const timeObject = ref();
    const InnerActionBtnPropeties = {
      name: "Now",
      show: true,
      fn: setTimeNow
    };
    const showPicker = ref(true);
    const isSetTimeNowPressed = ref(false);
    const componentKey = ref(0);
    const props = __props;
    watch(
      () => props.time_prop,
      (newValue) => {
        if (!newValue) return;
        refTime.value = newValue.time;
      },
      {
        immediate: true,
        deep: true
      }
    );
    const emit = __emit;
    function timeUpDated() {
      emit("timeUpDated", timeObject.value);
    }
    function openDatePopOver(event) {
      if (isSetTimeNowPressed.value == true) {
        showPicker.value = false;
        isSetTimeNowPressed.value = false;
      } else {
        showPicker.value = true;
      }
      popoverProperties.value.isOpen = true;
      popoverProperties.value.event = event;
    }
    function saveTime(event) {
      refTime.value = event.detail.value;
      const time2 = formatTime(refTime.value);
      if (containsNaN(time2) == true) {
        setTimeNow();
        return;
      }
      refTime.value = time2;
    }
    function containsNaN(str) {
      return str.indexOf("NaN") !== -1;
    }
    function formatTime(date) {
      let theDate = new Date(date);
      let hours = theDate.getHours();
      let minutes = theDate.getMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      let formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + " " + ampm;
      timeObject.value = {
        time: formattedTime,
        meridian: ampm
      };
      timeUpDated();
      return formattedTime;
    }
    function setTimeNow() {
      isSetTimeNowPressed.value = true;
      refTime.value = formatTime(/* @__PURE__ */ new Date());
      showPicker.value = false;
      componentKey.value++;
    }
    return (_ctx, _cache) => {
      const _component_ion_popover = resolveComponent("ion-popover");
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(BasicInputField, {
          placeholder: props.place_holder.default,
          inputValue: refTime.value,
          icon: unref(time),
          "-inner-action-btn-propeties": InnerActionBtnPropeties,
          "onClicked:inputValue": openDatePopOver,
          "onUpdate:InnerActionBtnPropetiesAction": InnerActionBtnPropeties.fn,
          key: componentKey.value
        }, null, 8, ["placeholder", "inputValue", "icon", "onUpdate:InnerActionBtnPropetiesAction"])),
        createVNode(_component_ion_popover, {
          "show-backdrop": false,
          "keep-contents-mounted": true,
          "is-open": popoverProperties.value.isOpen,
          event: popoverProperties.value.event,
          side: "top",
          onDidDismiss: _cache[0] || (_cache[0] = ($event) => popoverProperties.value.isOpen = false)
        }, {
          default: withCtx(() => [
            showPicker.value ? (openBlock(), createBlock(unref(IonDatetime), {
              key: 0,
              onIonChange: saveTime,
              id: "datetime",
              presentation: "time",
              "show-default-buttons": true
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["is-open", "event"])
      ], 64);
    };
  }
});

const __default__$6 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    selected_ward_prop: {},
    admitted_other_props: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const WardsData = ref([]);
    const store = useOutcomeStore();
    const editIndex = ref(NaN);
    const ward_show_error = ref(false);
    const selected_ward = ref();
    const show_alert_for_saving = ref(false);
    onMounted(async () => {
      findWardName();
      resetShowAlertForSaving();
    });
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const time_properties = [
      {
        placeHolder: { default: "Enter time of admission" },
        dataHandler: timeUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "error"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_ward_prop,
      (newValue) => {
        if (!newValue) return;
        selected_ward.value = newValue;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.admitted_other_props,
      (newValue) => {
        if (!newValue) return;
        note_properties[0].dataValue.value = newValue.reason;
        time_properties[0].dataValue.value = newValue.time;
        date_properties[0].dataValue.value = newValue.date;
      },
      {
        immediate: true,
        deep: true
      }
    );
    function resetShowAlertForSaving(value = true) {
      show_alert_for_saving.value = value;
    }
    function timeUpdate_fn1(data) {
      time_properties[0].dataValue.value = data;
      validateForm(false);
    }
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
      showReminderForSaving();
      resetShowAlertForSaving(false);
    }
    function showReminderForSaving() {
      if (show_alert_for_saving.value == true) {
        toastWarning("Remember to press the SAVE button", 1e4);
      }
    }
    async function findWardName(data) {
      try {
        WardsData.value = await getPouchDBRecords("wards");
        if (WardsData.value.length == 0) {
          WardsData.value = useWardsStore().wards;
        }
        WardsData.value.forEach((item) => {
          const _item_ = {
            name: item.name,
            selected: false,
            other: item,
            location_ward_id: item.other.location_id
          };
          WardsData.value.push(_item_);
        });
      } catch (error) {
        console.error("err: ", error);
      }
    }
    function validateForm(showToast = true) {
      validateWard();
      validateNotes();
      validateDate();
      validateTime();
      if (date_properties[0].show_error.value == false && time_properties[0].show_error.value == false && note_properties[0].show_error.value == false && ward_show_error.value == false) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter correct data values", 4e3);
        }
      }
    }
    function validateWard() {
      if (selected_ward.value === void 0 || selected_ward.value == "") {
        ward_show_error.value = true;
      } else {
        ward_show_error.value = false;
      }
    }
    function validateNotes() {
      if (note_properties[0].dataValue.value == "" || note_properties[0].dataValue.value === void 0) {
        note_properties[0].show_error.value = true;
      } else {
        note_properties[0].show_error.value = false;
      }
    }
    async function saveDataToStores() {
      const referralData = {
        name: selected_ward.value.name,
        type: "Admitted for short stay",
        ward_name: selected_ward.value.name,
        date: date_properties[0].dataValue,
        time: time_properties[0].dataValue,
        reason: note_properties[0].dataValue,
        other: selected_ward.value,
        selected: true
      };
      const isSaved = await store.addOutcomeData(referralData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    }
    const emit = __emit;
    function dataSaved(data = { dataSaved: true }) {
      emit("dataSaved", data);
    }
    function cancelE() {
      dataSaved();
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    function validateTime() {
      if (time_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        time_properties[0].show_error.value = true;
      } else {
        time_properties[0].show_error.value = false;
      }
    }
    const selectedWard = (data) => {
      selected_ward.value = data;
      resetShowAlertForSaving();
      validateForm(false);
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), {
                onClick: _cache[0] || (_cache[0] = ($event) => findWardName("dd"))
              }, {
                default: withCtx(() => [..._cache[4] || (_cache[4] = [
                  createTextVNode("Admitted for Short Stay", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(unref(script), {
                        modelValue: selected_ward.value,
                        "onUpdate:modelValue": [
                          _cache[1] || (_cache[1] = ($event) => selected_ward.value = $event),
                          _cache[2] || (_cache[2] = ($event) => selectedWard($event))
                        ],
                        multiple: false,
                        taggable: false,
                        "hide-selected": true,
                        "close-on-select": true,
                        openDirection: "bottom",
                        "tag-placeholder": "Find and select a ward",
                        placeholder: "Find and select a ward",
                        selectLabel: "",
                        label: "name",
                        searchable: true,
                        disabled: false,
                        onSearchChange: _cache[3] || (_cache[3] = ($event) => $event = {}),
                        "track-by": "location_ward_id",
                        options: WardsData.value
                      }, null, 8, ["modelValue", "options"]),
                      createBaseVNode("div", null, [
                        ward_show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(toDisplayString("Please select a ward"), -1)
                          ])]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$f, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$a, {
                          place_holder: time_properties[0].placeHolder,
                          onTimeUpDated: time_properties[0].dataHandler,
                          time_prop: time_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onTimeUpDated", "time_prop"]),
                        createBaseVNode("div", null, [
                          time_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(time_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(BasicInputField, {
                        placeholder: note_properties[0].placeHolder,
                        icon: unref(pencilOutline),
                        inputValue: note_properties[0].dataValue.value,
                        "onUpdate:inputValue": note_properties[0].dataHandler
                      }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                      createBaseVNode("div", null, [
                        note_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(note_properties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const AdmittedforShortStayOutcomef = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-2508fb5d"]]);

const __default__$5 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    selected_referral_data: {},
    selected_other_referral_data: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const editIndex = ref(NaN);
    const FacilityData = ref(null);
    const store = useOutcomeStore();
    const show_location_error = ref(false);
    const selectedDistrictIds = ref([]);
    const selected_location = ref({});
    const show_alert_for_saving = ref(true);
    const other_store_data = {
      location_data: {}
    };
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const time_properties = [
      {
        placeHolder: { default: "Enter time of referral" },
        dataHandler: timeUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "error"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_other_referral_data,
      (newValue) => {
        if (!newValue) return;
        note_properties[0].dataValue.value = newValue.reason;
        date_properties[0].dataValue.value = newValue.date;
        time_properties[0].dataValue.value = newValue.time;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.selected_referral_data,
      (newValue) => {
        if (!newValue) return;
        FacilityData.value = newValue.selected_location;
        other_store_data.location_data = newValue;
        const districtIds = Array.isArray(newValue.selected_district_ids) ? [...newValue.selected_district_ids] : [];
        const location = newValue.selected_location ? { ...newValue.selected_location } : null;
        selectedDistrictIds.value = districtIds;
        selected_location.value = location;
      },
      {
        immediate: true,
        deep: true
      }
    );
    onMounted(() => {
      resetShowAlertForSaving();
    });
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
      showReminderForSaving();
      resetShowAlertForSaving(false);
    }
    function showReminderForSaving() {
      if (show_alert_for_saving.value == true) {
        toastWarning("Remember to press the SAVE button", 1e4);
      }
    }
    function timeUpdate_fn1(data) {
      time_properties[0].dataValue.value = data;
      validateForm(false);
    }
    function validateForm(showToast = true) {
      validateFacility();
      validateNotes();
      validateDate();
      validateTime();
      if (date_properties[0].show_error.value == false && time_properties[0].show_error.value == false && note_properties[0].show_error.value == false && show_location_error.value == false) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter correct data values", 4e3);
        }
      }
    }
    function validateNotes() {
      if (note_properties[0].dataValue.value == "" || note_properties[0].dataValue.value === void 0) {
        note_properties[0].show_error.value = true;
      } else {
        note_properties[0].show_error.value = false;
      }
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    function validateTime() {
      if (time_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        time_properties[0].show_error.value = true;
      } else {
        time_properties[0].show_error.value = false;
      }
    }
    function validateFacility() {
      if (FacilityData.value) {
        show_location_error.value = false;
      } else {
        show_location_error.value = true;
      }
    }
    function resetShowAlertForSaving(value = true) {
      show_alert_for_saving.value = value;
    }
    const facilitySelected = (data) => {
      FacilityData.value = data.selected_location;
      validateFacility();
      other_store_data.location_data = data;
      resetShowAlertForSaving();
      validateForm(false);
    };
    const saveDataToStores = async () => {
      const referralInfo = {
        name: FacilityData.value.name,
        facility_code: FacilityData.value.code,
        facility_name: FacilityData.value.name,
        facility_district: FacilityData.value.district,
        type: "Referred out",
        selected: true,
        date: date_properties[0].dataValue,
        time: time_properties[0].dataValue,
        reason: note_properties[0].dataValue
      };
      const referralData = {
        ...referralInfo,
        other: {
          ref_data: referralInfo,
          location_data: other_store_data.location_data
        }
      };
      const isSaved = await store.addOutcomeData(referralData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    };
    const cancelE = () => {
      dataSaved();
    };
    const emit = __emit;
    function dataSaved(data = { "dataSaved": true }) {
      emit("dataSaved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: " save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Referred Out", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(SelectFacility, {
                    show_error: show_location_error.value,
                    onFacilitySelected: facilitySelected,
                    selected_district_ids: selectedDistrictIds.value,
                    selected_location: selected_location.value
                  }, null, 8, ["show_error", "selected_district_ids", "selected_location"])
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$f, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$a, {
                          place_holder: time_properties[0].placeHolder,
                          onTimeUpDated: time_properties[0].dataHandler,
                          time_prop: time_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onTimeUpDated", "time_prop"]),
                        createBaseVNode("div", null, [
                          time_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(time_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(BasicInputField, {
                        placeholder: note_properties[0].placeHolder,
                        icon: unref(pencilOutline),
                        inputValue: note_properties[0].dataValue.value,
                        "onUpdate:inputValue": note_properties[0].dataHandler
                      }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                      createBaseVNode("div", null, [
                        note_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(note_properties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const ReferredOutCome = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-7b6ec0cf"]]);

const __default__$4 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    selected_discharged_prop: {},
    selected_discharged_data: {}
  },
  emits: ["dataSaved"],
  setup(__props, { emit: __emit }) {
    const editIndex = ref(NaN);
    const FacilityData = ref([]);
    const store = useOutcomeStore();
    const selected_discharged = ref();
    onMounted(async () => {
      findWardName("");
    });
    const note_properties = [
      {
        placeHolder: "Reason",
        dataHandler: notesUpDated_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide a reason"
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date" },
        dataHandler: dateUpdate_fn1,
        dataValue: ref(),
        show_error: ref(false),
        error_message: "please provide date"
      }
    ];
    const props = __props;
    watch(
      () => props.selected_discharged_prop,
      (newValue) => {
        if (!newValue) return;
        selected_discharged.value = newValue;
      },
      {
        immediate: true,
        deep: true
      }
    );
    watch(
      () => props.selected_discharged_data,
      (newValue) => {
        if (!newValue) return;
        date_properties[0].dataValue.value = newValue.date || "";
        if (newValue.reason) {
          note_properties[0].dataValue.value = newValue.reason;
        }
      },
      {
        immediate: true,
        deep: true
      }
    );
    function dateUpdate_fn1(data) {
      const date_data = {
        day: data.value.day,
        month: data.value.month,
        year: data.value.year,
        formattedDate: data.value.formattedDate
      };
      date_properties[0].dataValue.value = date_data;
      validateForm(false);
    }
    function notesUpDated_fn1(event) {
      const reason = event.target.value;
      note_properties[0].dataValue.value = reason;
    }
    [
      {
        multi_Selection: false,
        show_list_label: true,
        unqueId: "qwerty4",
        name_of_list: "Choose Facility",
        placeHolder: "Choose one",
        items: FacilityData.value,
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        searchTextFN: findWardName,
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a Facility",
        disabled: ref(false)
      }
    ];
    const uniqueLocations = /* @__PURE__ */ new Set();
    async function findWardName(data) {
      const srch_text = data;
      const temp_data1 = await LocationService.getFacilities({ name: srch_text });
      if (temp_data1) return;
      temp_data1.forEach((item) => {
        if (!uniqueLocations.has(item.location_id)) {
          uniqueLocations.add(item.location_id);
          if (lodashExports.isEmpty(item.name) == false) {
            FacilityData.value.push({ name: item.name, selected: false, other: item });
          }
        }
      });
    }
    function listUpdated1(data) {
      FacilityData.value = data;
    }
    function validateForm(showToast = true) {
      validateDate();
      if (!date_properties[0].show_error.value) {
        saveDataToStores();
      } else {
        if (showToast) {
          toastWarning("Please enter a valid date", 4e3);
        }
      }
    }
    function validateDate() {
      if (date_properties[0].dataValue.value === void 0 || date_properties[0].dataValue.value == "") {
        date_properties[0].show_error.value = true;
      } else {
        date_properties[0].show_error.value = false;
      }
    }
    async function saveDataToStores() {
      const dischargeData = {
        type: "Discharged Home",
        date: date_properties[0].dataValue,
        reason: note_properties[0].dataValue.value,
        // Include the reason field
        selected: true
      };
      const isSaved = await store.addOutcomeData(dischargeData, editIndex.value);
      if (isSaved) {
        dataSaved({ dataSaved: false });
      }
    }
    function cancelE() {
      dataSaved();
    }
    const emit = __emit;
    function dataSaved(data = { dataSaved: true }) {
      emit("dataSaved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Discharged Home", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createBaseVNode("div", null, [
                        createVNode(_sfc_main$f, {
                          place_holder: date_properties[0].placeHolder,
                          onDateUpDated: date_properties[0].dataHandler,
                          date_prop: date_properties[0].dataValue.value
                        }, null, 8, ["place_holder", "onDateUpDated", "date_prop"]),
                        createBaseVNode("div", null, [
                          date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              dynamic_button_properties[0].showAddItemButton ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                class: "action-buttons-row"
              }, {
                default: withCtx(() => [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const DischargedHome = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-e39df163"]]);

const _hoisted_1$5 = { class: "date-results-container" };
const _hoisted_2$5 = { class: "date-buttons-container" };
const _hoisted_3$4 = {
  key: 0,
  class: "validation-message"
};


const _sfc_main$6 = {
  __name: 'DatePillSelector',
  props: {
  availableDates: {
    type: Array,
    required: true,
    default: () => []
  }
},
  emits: ['dateSelected'],
  setup(__props, { expose: __expose, emit: __emit }) {

const props = __props;

const emit = __emit;

const selectedIndex = ref(null);
const validationError = ref(false); 

const selectDate = (index) => {
  selectedIndex.value = index;
  validationError.value = false; 
  emit('dateSelected', {
    date: props.availableDates[index],
    index: index
  });
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  };
  // Ensure the date object is valid before formatting
  if (isNaN(date)) {
      return dateString; // Fallback to original string if invalid date
  }
  return date.toLocaleDateString('en-US', options);
};

// Expose a validation function for the parent component to call
const validateSelection = () => {
    if (selectedIndex.value === null) {
        validationError.value = true;
        return false; // Validation failed
    }
    validationError.value = false;
    return true; // Validation passed
};

/**
 * @description Exposes the currently selected date object.
 * This is crucial for the parent component to collect the final referral data.
 * @returns {any | null} The selected date object/string from availableDates, or null.
 */
const getSelectedDate = () => {
    if (selectedIndex.value !== null) {
        return props.availableDates[selectedIndex.value];
    }
    return null;
};

// Expose the validation function and selected date getter for external use
__expose({
    validateSelection,
    getSelectedDate // 👈 ADDED for the parent component to retrieve the selected date
});

return (_ctx, _cache) => {
  return (openBlock(), createElementBlock("div", _hoisted_1$5, [
    createBaseVNode("div", _hoisted_2$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.availableDates, (date, index) => {
        return (openBlock(), createBlock(unref(IonButton), {
          key: index,
          class: normalizeClass(["date-button", { 
                'selected': selectedIndex.value === index,
                'error-border': validationError.value && selectedIndex.value !== index
            }]),
          fill: "outline",
          shape: "round",
          onClick: $event => (selectDate(index))
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(formatDate(date)), 1)
          ]),
          _: 2
        }, 1032, ["class", "onClick"]))
      }), 128))
    ]),
    (validationError.value)
      ? (openBlock(), createElementBlock("p", _hoisted_3$4, " ⚠️ Please select an available date to proceed. "))
      : createCommentVNode("", true)
  ]))
}
}

};
const DatePillSelector = /*#__PURE__*/_export_sfc(_sfc_main$6, [['__scopeId',"data-v-1e34f199"]]);

class PatientReferralService extends AppEncounterService {
  constructor(patientID, providerID) {
    super(patientID, 114, providerID);
  }
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ReferToAnotherClinic",
  emits: ["programDateSelected", "referralDataReady", "data-saved"],
  setup(__props, { emit: __emit }) {
    const outcomeStore = useOutcomeStore();
    const emits = __emit;
    const user_programs = ref([]);
    const selectedProgramsWithDates = ref([]);
    const finalSelectedDates = ref([]);
    const programStore = useProgramStore();
    const clinicalDaysStore = useClinicalDaysStore();
    const { activeProgram } = storeToRefs(programStore);
    const dateValidationFailed = ref(false);
    const list_picker_prperties = [
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: "qwerty_8_562",
        name_of_list: "Clinics",
        placeHolder: "Search for programs",
        items: [],
        listUpdatedFN: listUpdated2,
        listFilteredFN: () => {
        },
        searchTextFN: () => {
        },
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "Please select one or more clinics/programs to refer to.",
        disabled: ref(false)
      }
    ];
    const validateForm = async () => {
      dateValidationFailed.value = false;
      const programSelected = selectedProgramsWithDates.value.length > 0;
      list_picker_prperties[0].show_error.value = !programSelected;
      if (!programSelected) {
        console.log("Validation Failed: No programs selected.");
        return;
      }
      let allDatesSelected = true;
      finalSelectedDates.value = [];
      for (const program of selectedProgramsWithDates.value) {
        if (program.dateSelectorRef) {
          const isValid = program.dateSelectorRef.validateSelection();
          if (!isValid) {
            allDatesSelected = false;
          } else {
            const selectedDate = program.dateSelectorRef.getSelectedDate();
            if (selectedDate) {
              finalSelectedDates.value.push({
                programId: program.id,
                programName: program.name,
                date: selectedDate
              });
            } else {
              allDatesSelected = false;
            }
          }
        } else {
          allDatesSelected = false;
          console.error(`Date Selector ref is missing for program ${program.name}`);
        }
      }
      if (!allDatesSelected) {
        dateValidationFailed.value = true;
        console.log("Validation Failed: Not all dates selected.");
        return;
      }
      console.log("Validation Passed! Ready to refer patient with data:", finalSelectedDates.value);
      emits("referralDataReady", finalSelectedDates.value);
      await openCornfirmModal(finalSelectedDates.value, sub_refferal_data);
    };
    const sub_refferal_data = async (programDates) => {
      try {
        const providerID = Service.getUserID();
        const patientID = Service.getPatientID();
        const referralService = new PatientReferralService(patientID, providerID);
        await referralService.createEncounter();
        const referralData = programDates.map((referral) => ({
          concept_id: 2227,
          value_numeric: referral.programId,
          obs_datetime: HisDate.sessionDate(),
          child: [
            {
              concept_id: 11242,
              value_text: HisDate.toStandardHisFormat(referral.date),
              obs_datetime: HisDate.sessionDate()
            }
          ]
        }));
        await referralService.saveObservationList(referralData);
        programDates.forEach((referral) => {
          const referralOutcome = {
            type: "Send to Another Clinic",
            name: referral.programName,
            reason: `Referred to ${referral.programName}`,
            date: referral.date,
            time: {},
            selected: true,
            other: {
              programId: referral.programId,
              programName: referral.programName,
              referralDate: referral.date
            }
          };
          outcomeStore.outcomes.push(referralOutcome);
        });
        toastSuccess("Patient referral saved successfully");
        dataSaved();
      } catch (error) {
        toastWarning("Error saving referral data. Please try again.", 4e3);
        console.error("Error in sub_refferal_data:", error);
      }
    };
    const cancelE = () => {
      dataSaved();
    };
    function dataSaved(data = { dataSaved: true }) {
      emits("data-saved", data);
    }
    const dynamic_button_properties = [
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "save",
        btnFill: "clear",
        fn: validateForm
      },
      {
        showAddItemButton: true,
        addItemButton: true,
        name: "cancel",
        btnFill: "clear",
        fn: cancelE
      }
    ];
    const handleDateSelected = (dateData, programId, programName) => {
      emits("programDateSelected", {
        programId,
        programName,
        date: dateData
      });
      dateValidationFailed.value = false;
      const index = finalSelectedDates.value.findIndex((item) => item.programId === programId);
      const newDateData = {
        programId,
        programName,
        date: dateData
      };
      if (index > -1) {
        finalSelectedDates.value[index] = newDateData;
      } else {
        finalSelectedDates.value.push(newDateData);
      }
    };
    async function listUpdated2(data) {
      user_programs.value = data;
      updateSelectedProgramsStructure();
      dateValidationFailed.value = false;
      await getAvailableDatesForAllSelectedPrograms();
    }
    function updateSelectedProgramsStructure() {
      const newlySelectedPrograms = [];
      user_programs.value.forEach((program) => {
        if (program.selected == true) {
          newlySelectedPrograms.push(program.other);
        }
      });
      const newSelectedProgramIds = newlySelectedPrograms.map((p) => p.program_id);
      selectedProgramsWithDates.value = selectedProgramsWithDates.value.filter((item) => newSelectedProgramIds.includes(item.id));
      finalSelectedDates.value = finalSelectedDates.value.filter((item) => newSelectedProgramIds.includes(item.programId));
      newlySelectedPrograms.forEach((program) => {
        if (!selectedProgramsWithDates.value.some((item) => item.id === program.program_id)) {
          selectedProgramsWithDates.value.push({
            id: program.program_id,
            name: program.name,
            dates: [],
            dateSelectorRef: null
            // Initialize the ref storage
          });
        }
      });
      list_picker_prperties[0].show_error.value = newlySelectedPrograms.length === 0;
    }
    const getAvailableDatesForAllSelectedPrograms = async () => {
      const dateFetchingPromises = selectedProgramsWithDates.value.map(async (program) => {
        try {
          const dates = clinicalDaysStore.getAvailableDatesByProgramId(program.id, 90, true, 4);
          program.dates = dates;
        } catch (error) {
          console.error(`Error fetching dates for program ${program.name}:`, error);
          program.dates = [];
        }
      });
      await Promise.all(dateFetchingPromises);
    };
    async function getUserPrograms() {
      const programId = activeProgram.value.program_id;
      const all_programs = await ProgramService.getAllPrograms();
      const temp_array = [];
      all_programs.forEach((item) => {
        if (item.program_id !== programId) {
          temp_array.push({
            name: item.name,
            other: item,
            selected: false
          });
        }
      });
      user_programs.value = temp_array;
    }
    const openCornfirmModal = async (param, callBackFn) => {
      const handleCancel = (event) => {
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          await callBackFn(param);
        }
      };
      const dataToPass = { message: "Are you sure you want to add this Referral(s)?" };
      createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
    };
    onMounted(async () => {
      await getUserPrograms();
      setValueProps();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonCardTitle), null, {
                default: withCtx(() => [..._cache[0] || (_cache[0] = [
                  createTextVNode("Refer to another clinic", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(unref(IonRow), null, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-left": "0px", "margin-top": "0px", "color": "grey" } }, {
                        default: withCtx(() => [..._cache[1] || (_cache[1] = [
                          createTextVNode(" Program(s)", -1),
                          createBaseVNode("span", { style: { "color": "#b42318" } }, "*", -1)
                        ])]),
                        _: 1
                      }),
                      createVNode(ListPicker, {
                        multiSelection: list_picker_prperties[0].multi_Selection,
                        show_label: list_picker_prperties[0].show_list_label,
                        uniqueId: list_picker_prperties[0].unqueId,
                        name_of_list: list_picker_prperties[0].name_of_list,
                        choose_place_holder: list_picker_prperties[0].placeHolder,
                        "items_-list": user_programs.value,
                        use_internal_filter: list_picker_prperties[0].use_internal_filter,
                        disabled: list_picker_prperties[0].disabled.value,
                        onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                        onItemListFiltered: list_picker_prperties[0].listFilteredFN,
                        onItemSearchText: list_picker_prperties[0].searchTextFN
                      }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
                      createBaseVNode("div", null, [
                        list_picker_prperties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                          key: 0,
                          class: "error-label"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(list_picker_prperties[0].error_message), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              (openBlock(true), createElementBlock(Fragment, null, renderList(selectedProgramsWithDates.value, (program, index) => {
                return openBlock(), createBlock(unref(IonRow), {
                  key: program.id
                }, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonLabel), { style: { "margin": "10px", "margin-top": "20px", "font-weight": "bold", "display": "block" } }, {
                          default: withCtx(() => [
                            _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "color": "gray" } }, "Available Dates for:", -1)),
                            createTextVNode(" " + toDisplayString(program.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(DatePillSelector, {
                          availableDates: program.dates,
                          onDateSelected: (data) => handleDateSelected(data, program.id, program.name),
                          ref_for: true,
                          ref: (el) => {
                            if (el) program.dateSelectorRef = el;
                          }
                        }, null, 8, ["availableDates", "onDateSelected"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128)),
              dateValidationFailed.value ? (openBlock(), createBlock(unref(IonRow), {
                key: 0,
                style: { "margin-top": "-10px" }
              }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), null, {
                    default: withCtx(() => [
                      createVNode(unref(IonLabel), { class: "error-label" }, {
                        default: withCtx(() => [..._cache[3] || (_cache[3] = [
                          createTextVNode(" ⚠️ Please select an available date for all selected programs. ", -1)
                        ])]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(IonRow), { class: "action-buttons" }, {
                default: withCtx(() => [
                  createVNode(unref(IonCol), { class: "ion-text-end" }, {
                    default: withCtx(() => [
                      dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                        key: 0,
                        name: dynamic_button_properties[1].name,
                        fill: dynamic_button_properties[1].btnFill,
                        icon: unref(closeCircleOutline),
                        "onClicked:btn": dynamic_button_properties[1].fn
                      }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                      selectedProgramsWithDates.value.length > 0 ? (openBlock(), createBlock(DynamicButton, {
                        key: 1,
                        name: dynamic_button_properties[0].name,
                        fill: dynamic_button_properties[0].btnFill,
                        icon: unref(saveOutline),
                        "onClicked:btn": dynamic_button_properties[0].fn
                      }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
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
      });
    };
  }
});

const ReferToAnotherClinic = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0acd0244"]]);

const _hoisted_1$4 = { class: "form-grid" };
const _hoisted_2$4 = { class: "form-field" };
const _hoisted_3$3 = { class: "form-field" };
const _hoisted_4$3 = { class: "form-field" };
const _hoisted_5$2 = { class: "form-field" };
const _hoisted_6$2 = {
  key: 0,
  class: "form-field checkbox-field"
};
const _hoisted_7$2 = { class: "form-field" };
const _hoisted_8$2 = { class: "form-field" };
const _hoisted_9$2 = { class: "form-field" };
const _hoisted_10$2 = { class: "form-field full-width" };
const _hoisted_11$2 = {
  key: 1,
  class: "form-field full-width"
};
const _hoisted_12$2 = {
  key: 2,
  class: "form-field full-width"
};
const _hoisted_13$2 = {
  key: 3,
  class: "form-field full-width"
};
const _hoisted_14$2 = { class: "form-field" };
const _hoisted_15$2 = { class: "form-field" };
const _hoisted_16$2 = { class: "form-field" };
const _hoisted_17$1 = { class: "form-field" };
const _hoisted_18$1 = { class: "form-field full-width" };
const _hoisted_19$1 = { class: "button-container" };
const __default__$3 = defineComponent({
  name: "DeathOutcomeComponent"
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  emits: ["data-saved"],
  setup(__props, { emit: __emit }) {
    const store = useOutcomeStore();
    const manner_of_death_Selection_value = ref();
    const how_did_it_occur_Selection_value = ref();
    const { showConfirm } = useConfirm();
    const showOtherMannerOfDeathField = computed(() => {
      const selected = mannerOfDeath.value.find((item) => item.selected);
      return selected?.name === "Other - specify";
    });
    const showOtherCauseOfDeathField = computed(() => {
      const selected = causesOfDeath.value.find((item) => item.selected);
      return selected?.name === "Other - specify";
    });
    const showPregnancyCheckbox = computed(() => {
      const patient = new PatientService();
      return patient.isChildBearing();
    });
    const showHowDidItOccurField = computed(() => {
      const selected = mannerOfDeath.value.find((item) => item.selected);
      return selected?.name === "Accident";
    });
    const time_properties = [
      {
        placeHolder: { default: "Enter time of death if known" },
        property_name: "timeOfDeath",
        dataHandler: (d) => {
          time_properties[0].dataValue.value = d;
          time_properties[0].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Time required",
        type: "time",
        skip_validation: false
      },
      {
        placeHolder: { default: "Enter time arrived" },
        property_name: "timeArrived",
        dataHandler: (d) => {
          time_properties[1].dataValue.value = d;
          time_properties[1].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Time required",
        type: "time",
        skip_validation: false
      },
      {
        placeHolder: { default: "Enter time confirming death" },
        property_name: "timeOfDeathConfirmation",
        dataHandler: (d) => {
          time_properties[2].dataValue.value = d;
          time_properties[2].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Time required",
        skip_validation: false
      }
    ];
    const date_properties = [
      {
        placeHolder: { default: "Enter date of death" },
        property_name: "dateOfDeath",
        dataHandler: (d) => {
          date_properties[0].dataValue.value = d.value;
          date_properties[0].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Date required",
        type: "date",
        skip_validation: false
      },
      {
        placeHolder: { default: "Enter date arrived" },
        property_name: "dateArrived",
        dataHandler: (d) => {
          date_properties[1].dataValue.value = d.value;
          date_properties[1].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Date required",
        type: "date",
        skip_validation: false
      },
      {
        placeHolder: { default: "Enter date confirming death" },
        property_name: "dateOfDeathConfirmation",
        dataHandler: (d) => {
          date_properties[2].dataValue.value = d.value;
          date_properties[2].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Date required",
        type: "date",
        skip_validation: false
      }
    ];
    const note_properties = [
      {
        placeHolder: "Enter place of death",
        property_name: "placeOfDeath",
        dataHandler: (e) => {
          note_properties[0].dataValue.value = e.target.value;
          note_properties[0].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: false
      },
      {
        placeHolder: "Enter name of guardian",
        property_name: "nameOfGuardian",
        dataHandler: (e) => {
          note_properties[1].dataValue.value = e.target.value;
          note_properties[1].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: false
      },
      {
        placeHolder: "Enter name of person confirming death",
        property_name: "nameOfPersonConfirmindDeath",
        dataHandler: (e) => {
          note_properties[2].dataValue.value = e.target.value;
          note_properties[2].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: false
      },
      {
        placeHolder: "Enter position of the person confirming death",
        property_name: "positionOfthePersonConfirmingDeath",
        dataHandler: (e) => {
          note_properties[3].dataValue.value = e.target.value;
          note_properties[3].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: false
      },
      {
        placeHolder: "Enter medical council registration number",
        property_name: "medicalConcilRegistrationNumberOfThePersonConfirmingDeath",
        dataHandler: (e) => {
          note_properties[4].dataValue.value = e.target.value;
          note_properties[4].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "alphanumeric",
        skip_validation: false
      },
      {
        placeHolder: "Specify other cause of death",
        property_name: "otherMannerNotes",
        dataHandler: (e) => {
          note_properties[5].dataValue.value = e.target.value;
          note_properties[5].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: true
      },
      {
        placeHolder: "Specify other accident cause",
        property_name: "otherCauseNotes",
        dataHandler: (e) => {
          note_properties[6].dataValue.value = e.target.value;
          note_properties[6].show_error.value = false;
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Input required",
        type: "text",
        skip_validation: true
      },
      {
        placeHolder: "Enter guardian phone number",
        property_name: "guardianPhoneNumber",
        dataHandler: (e) => {
          const value = e.target.value;
          note_properties[7].dataValue.value = value;
          const phoneRegex = /^(0|265)?[1-9]\d{8}$/;
          if (value && !phoneRegex.test(value.replace(/\s/g, ""))) {
            note_properties[7].show_error.value = true;
          } else {
            note_properties[7].show_error.value = false;
          }
        },
        dataValue: ref(),
        show_error: ref(false),
        error_message: "Invalid phone number. Use Malawian format (e.g., 0999123456 or 265999123456)",
        type: "tel",
        skip_validation: false
      }
    ];
    const checkbox_properties = [
      {
        lblTxt: "Was the individual pregnant at the time of death?",
        value: ref(false),
        show_error: ref(false),
        error_message: "Please indicate pregnancy status",
        skip_validation: false
      }
    ];
    const mannerOfDeath = ref([
      { id: 1, name: "Natural", selected: false },
      { id: 2, name: "Accident", selected: false },
      { id: 3, name: "Homicide", selected: false },
      { id: 4, name: "Suicide", selected: false },
      { id: 5, name: "Pending investigation", selected: false },
      { id: 6, name: "Could not be determined", selected: false },
      { id: 7, name: "Other - specify", selected: false }
    ]);
    const causesOfDeath = ref([
      { id: 1, name: "Motor vehicle (passenger)", selected: false },
      { id: 2, name: "Motor vehicle (pedestrian)", selected: false },
      { id: 3, name: "Drowning", selected: false },
      { id: 4, name: "Other - specify", selected: false }
    ]);
    const list_picker_prperties = [
      { property_name: "mannerOfDeath", show_error: ref(false), items: mannerOfDeath.value },
      { property_name: "howDiditOccur", show_error: ref(false), items: causesOfDeath.value }
    ];
    function listUpdated1(data) {
      list_picker_prperties[0].show_error.value = false;
      mannerOfDeath.value.forEach((item) => item.selected = item.id === data.id);
      if (data.name !== "Accident") {
        how_did_it_occur_Selection_value.value = null;
        causesOfDeath.value.forEach((i) => i.selected = false);
        list_picker_prperties[1].show_error.value = false;
      }
    }
    function listUpdated2(data) {
      list_picker_prperties[1].show_error.value = false;
      causesOfDeath.value.forEach((item) => item.selected = item.id === data.id);
    }
    function isItemSeleted() {
      let isValid = true;
      const selectedManner = mannerOfDeath.value.find((item) => item.selected);
      if (!selectedManner) {
        list_picker_prperties[0].show_error.value = true;
        isValid = false;
      }
      if (selectedManner?.name === "Accident") {
        const selectedCause = causesOfDeath.value.find((item) => item.selected);
        if (!selectedCause) {
          list_picker_prperties[1].show_error.value = true;
          isValid = false;
        }
      }
      return isValid;
    }
    const validateFormAndSave = async () => {
      const isNotesValid = areFieldsValid(note_properties);
      const isDatesValid = areFieldsValid(date_properties);
      const isTimesValid = areFieldsValid(time_properties);
      const isListsValid = isItemSeleted();
      if (!isNotesValid || !isDatesValid || !isTimesValid || !isListsValid) {
        toastDanger("Please fill in all required fields correctly.");
        return;
      }
      try {
        const data = lodashExports.merge(
          getFieldsValuesObj(note_properties),
          getFieldsValuesObj(date_properties),
          getFieldsValuesObj(time_properties),
          getItemSeletedObj(list_picker_prperties[0]),
          getItemSeletedObj(list_picker_prperties[1]),
          { wasPregnantAtTimeOfDeath: checkbox_properties[0].value.value }
        );
        const childObservations = createObservationArray(data);
        const payload = [
          {
            concept_id: 11520,
            value_coded: 11520,
            child: childObservations,
            obs_datetime: HisDate.sessionDate()
          }
        ];
        await ObservationService.addObsToEncounterPatient(payload, EncounterTypeId.PATIENT_OUTCOME);
        const deathOutcome = {
          type: "Death",
          name: data.mannerOfDeath || "",
          reason: data.placeOfDeath || "",
          date: data.dateOfDeath || {
            year: (/* @__PURE__ */ new Date()).getFullYear(),
            month: (/* @__PURE__ */ new Date()).getMonth() + 1,
            day: (/* @__PURE__ */ new Date()).getDate()
          },
          time: data.timeOfDeath || {},
          selected: true,
          other: {
            guardian: data.nameOfGuardian || "",
            confirmedBy: data.nameOfPersonConfirmindDeath || "",
            position: data.positionOfthePersonConfirmingDeath || "",
            medicalCouncilNumber: data.medicalConcilRegistrationNumberOfThePersonConfirmingDeath || ""
          }
        };
        store.outcomes.push(deathOutcome);
        toastSuccess("Patient outcome saved successfully");
        emit("data-saved");
      } catch (error) {
        toastDanger("Failed to save patient outcome");
      }
    };
    const createObservationArray = (data) => {
      const sessionDate = HisDate.sessionDate();
      const obsArray = [];
      if (data.dateOfDeath?.formattedDate) obsArray.push({ concept_id: 1815, value_text: data.dateOfDeath.formattedDate, obs_datetime: sessionDate });
      if (data.dateArrived?.formattedDate) obsArray.push({ concept_id: 7398, value_text: data.dateArrived.formattedDate, obs_datetime: sessionDate });
      if (data.timeOfDeath?.time) obsArray.push({ concept_id: 9161, value_text: data.timeOfDeath.time, obs_datetime: sessionDate });
      if (data.timeArrived?.time) obsArray.push({ concept_id: 5605, value_text: data.timeArrived.time, obs_datetime: sessionDate });
      if (data.mannerOfDeath) obsArray.push({ concept_id: 5002, value_text: data.mannerOfDeath, obs_datetime: sessionDate });
      return obsArray;
    };
    function getItemSeletedObj(propItem) {
      const selected = propItem.items.find((i) => i.selected);
      return selected ? { [propItem.property_name]: selected.name } : {};
    }
    const confirmSave = () => triggerAction(validateFormAndSave, "Do you want to save the death outcome?");
    const triggerAction = async (fn, msg) => {
      if (await showConfirm(msg)) fn();
    };
    const dynamic_button_properties = [
      { addItemButton: true, name: "save", btnFill: "clear", fn: confirmSave },
      { addItemButton: true, name: "cancel", btnFill: "clear", fn: () => emit("data-saved") }
    ];
    const emit = __emit;
    return (_ctx, _cache) => {
      const _component_ion_card_title = resolveComponent("ion-card-title");
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(_component_ion_card_title, null, {
                default: withCtx(() => [..._cache[6] || (_cache[6] = [
                  createTextVNode("Death Outcome", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1$4, [
                createBaseVNode("div", _hoisted_2$4, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[0].placeHolder,
                    icon: unref(locationOutline),
                    inputValue: note_properties[0].dataValue.value,
                    "onUpdate:inputValue": note_properties[0].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[0].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_3$3, [
                  createVNode(_sfc_main$f, {
                    place_holder: date_properties[0].placeHolder,
                    onDateUpDated: date_properties[0].dataHandler,
                    date_prop: ""
                  }, null, 8, ["place_holder", "onDateUpDated"]),
                  date_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(date_properties[0].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_4$3, [
                  createVNode(_sfc_main$a, {
                    place_holder: time_properties[0].placeHolder,
                    onTimeUpDated: time_properties[0].dataHandler,
                    time_prop: ""
                  }, null, 8, ["place_holder", "onTimeUpDated"]),
                  time_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(time_properties[0].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_5$2, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[1].placeHolder,
                    icon: unref(personCircleOutline),
                    inputValue: note_properties[1].dataValue.value,
                    "onUpdate:inputValue": note_properties[1].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[1].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                showPregnancyCheckbox.value ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
                  createVNode(unref(IonCheckbox), {
                    modelValue: checkbox_properties[0].value.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checkbox_properties[0].value.value = $event),
                    alignment: "start",
                    class: "ion-lblCls",
                    onIonChange: _cache[1] || (_cache[1] = ($event) => checkbox_properties[0].show_error.value = false)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(checkbox_properties[0].lblTxt), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue"]),
                  checkbox_properties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(checkbox_properties[0].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_7$2, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[7].placeHolder,
                    icon: unref(phonePortraitOutline),
                    inputValue: note_properties[7].dataValue.value,
                    "onUpdate:inputValue": note_properties[7].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[7].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[7].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_8$2, [
                  createVNode(_sfc_main$f, {
                    place_holder: date_properties[1].placeHolder,
                    onDateUpDated: date_properties[1].dataHandler,
                    date_prop: ""
                  }, null, 8, ["place_holder", "onDateUpDated"]),
                  date_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(date_properties[1].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_9$2, [
                  createVNode(_sfc_main$a, {
                    place_holder: time_properties[1].placeHolder,
                    onTimeUpDated: time_properties[1].dataHandler,
                    time_prop: ""
                  }, null, 8, ["place_holder", "onTimeUpDated"]),
                  time_properties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(time_properties[1].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_10$2, [
                  createVNode(unref(script), {
                    modelValue: manner_of_death_Selection_value.value,
                    "onUpdate:modelValue": [
                      _cache[2] || (_cache[2] = ($event) => manner_of_death_Selection_value.value = $event),
                      _cache[3] || (_cache[3] = ($event) => listUpdated1($event))
                    ],
                    multiple: false,
                    taggable: false,
                    "hide-selected": true,
                    "close-on-select": true,
                    openDirection: "bottom",
                    placeholder: "Manner of death",
                    selectLabel: "",
                    label: "name",
                    searchable: true,
                    "track-by": "id",
                    options: mannerOfDeath.value
                  }, null, 8, ["modelValue", "options"]),
                  list_picker_prperties[0].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(list_picker_prperties[0].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                showOtherMannerOfDeathField.value ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[5].placeHolder,
                    icon: unref(pencilOutline),
                    inputValue: note_properties[5].dataValue.value,
                    "onUpdate:inputValue": note_properties[5].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[5].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[5].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                showHowDidItOccurField.value ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
                  createVNode(unref(script), {
                    modelValue: how_did_it_occur_Selection_value.value,
                    "onUpdate:modelValue": [
                      _cache[4] || (_cache[4] = ($event) => how_did_it_occur_Selection_value.value = $event),
                      _cache[5] || (_cache[5] = ($event) => listUpdated2($event))
                    ],
                    multiple: false,
                    taggable: false,
                    "hide-selected": true,
                    "close-on-select": true,
                    openDirection: "bottom",
                    placeholder: "How did it occur?",
                    selectLabel: "",
                    label: "name",
                    searchable: true,
                    "track-by": "id",
                    options: causesOfDeath.value
                  }, null, 8, ["modelValue", "options"]),
                  list_picker_prperties[1].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(list_picker_prperties[1].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                showOtherCauseOfDeathField.value ? (openBlock(), createElementBlock("div", _hoisted_13$2, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[6].placeHolder,
                    icon: unref(pencilOutline),
                    inputValue: note_properties[6].dataValue.value,
                    "onUpdate:inputValue": note_properties[6].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[6].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[6].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_14$2, [
                  createVNode(_sfc_main$f, {
                    place_holder: date_properties[2].placeHolder,
                    onDateUpDated: date_properties[2].dataHandler,
                    date_prop: ""
                  }, null, 8, ["place_holder", "onDateUpDated"]),
                  date_properties[2].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(date_properties[2].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_15$2, [
                  createVNode(_sfc_main$a, {
                    place_holder: time_properties[2].placeHolder,
                    onTimeUpDated: time_properties[2].dataHandler,
                    time_prop: ""
                  }, null, 8, ["place_holder", "onTimeUpDated"]),
                  time_properties[2].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(time_properties[2].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_16$2, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[2].placeHolder,
                    icon: unref(personCircleOutline),
                    inputValue: note_properties[2].dataValue.value,
                    "onUpdate:inputValue": note_properties[2].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[2].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[2].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_17$1, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[3].placeHolder,
                    icon: unref(medicalOutline),
                    inputValue: note_properties[3].dataValue.value,
                    "onUpdate:inputValue": note_properties[3].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[3].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[3].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_18$1, [
                  createVNode(BasicInputField, {
                    placeholder: note_properties[4].placeHolder,
                    icon: unref(pencilOutline),
                    inputValue: note_properties[4].dataValue.value,
                    "onUpdate:inputValue": note_properties[4].dataHandler
                  }, null, 8, ["placeholder", "icon", "inputValue", "onUpdate:inputValue"]),
                  note_properties[4].show_error.value ? (openBlock(), createBlock(unref(IonLabel), {
                    key: 0,
                    class: "error-label"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(note_properties[4].error_message), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                createVNode(HorizontalLine, {
                  color: "#006401",
                  animated: true,
                  thickness: 1,
                  class: "full-width-divider"
                }),
                createBaseVNode("div", _hoisted_19$1, [
                  dynamic_button_properties[0].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 0,
                    name: dynamic_button_properties[0].name,
                    fill: dynamic_button_properties[0].btnFill,
                    icon: unref(saveOutline),
                    "onClicked:btn": dynamic_button_properties[0].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true),
                  dynamic_button_properties[1].addItemButton ? (openBlock(), createBlock(DynamicButton, {
                    key: 1,
                    name: dynamic_button_properties[1].name,
                    fill: dynamic_button_properties[1].btnFill,
                    icon: unref(closeCircleOutline),
                    "onClicked:btn": dynamic_button_properties[1].fn
                  }, null, 8, ["name", "fill", "icon", "onClicked:btn"])) : createCommentVNode("", true)
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

const deadOutcome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-d5ad041c"]]);

const _hoisted_1$3 = { class: "dash_box" };
const _hoisted_2$3 = {
  key: 0,
  style: { "margin-top": "100px" }
};
const __default__$2 = defineComponent({
  name: "xxxComponent"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    const initialMsg = ref("No outcome created yet");
    const show_error_msg_for_ref_type = ref(false);
    const showAddItemButton = ref(true);
    const refType = ref("");
    const showEmptyMsg = ref(true);
    const showAddReferralInfo = ref(false);
    const store = useOutcomeStore();
    const outcomes = computed(() => store.outcomes);
    const EditEvnt = ref(false);
    const show_dead_options = ref(false);
    const show_admitted_options = ref(false);
    const show_referred_options = ref(false);
    const show_discharged_options = ref(false);
    const show_refer_to_another_clinic = ref(false);
    const selected_referral_type = ref();
    const selected_referral_type_data = ref(null);
    const selected_referral_data = ref(null);
    const selected_ward_data = ref(null);
    const admitted_other_data = ref(null);
    const selected_discharged_type_data = ref(null);
    const selected_discharged_data = ref(null);
    const referralType = ref([
      {
        name: "Admitted for short stay",
        selected: false
      },
      {
        name: "Referred out",
        selected: false
      },
      {
        name: "Discharged Home",
        selected: false
      },
      {
        name: "Send to Another Clinic",
        selected: false
      },
      {
        name: "Death",
        selected: false
      }
    ]);
    function listUpdated(data) {
      referralType.value.forEach((item) => {
        if (data.selected == true && (data.name == item.name || data.type == item.name)) {
          refType.value = item.name;
        }
      });
    }
    onMounted(async () => {
      checkForOutcomes();
    });
    watch(
      () => refType.value,
      async (newvalue) => {
        if (EditEvnt.value == true) {
          EditEvnt.value = false;
        } else {
          checkRefType();
        }
      }
    );
    watch(
      () => outcomes.value.length,
      async (newvalue) => {
        checkForOutcomes();
      }
    );
    function resetSelection() {
      referralType.value.forEach((item) => {
        item.selected = false;
      });
      refType.value = "";
    }
    function checkForOutcomes() {
      if (outcomes.value.length > 0) {
        showEmptyMsg.value = false;
      } else if (outcomes.value.length == 0 && showAddReferralInfo.value == false) {
        showEmptyMsg.value = true;
      }
    }
    function removeItem(index) {
      outcomes.value.splice(index, 1);
    }
    const editItem = (data) => {
      removeItem(data.index);
      listUpdated(data.item);
      selected_referral_type_data.value = data.item.other.location_data;
      selected_referral_data.value = {
        reason: data.item.reason,
        date: data.item.date,
        time: data.item.time
      };
      selected_ward_data.value = data.item.other;
      admitted_other_data.value = data.item;
      if (data.item.type === "Discharged Home") {
        selected_discharged_type_data.value = data.item;
        selected_discharged_data.value = {
          reason: data.item.reason,
          date: data.item.date
        };
      }
    };
    async function checkRefType(clear_inputs = true) {
      const tempRefType = refType.value;
      refType.value = tempRefType;
      const ref_type = refType.value;
      if (ref_type == referralType.value[0].name) {
        show_admitted_options.value = true;
      } else {
        show_admitted_options.value = false;
      }
      if (ref_type == referralType.value[1].name) {
        show_referred_options.value = true;
      } else {
        show_referred_options.value = false;
      }
      if (ref_type == referralType.value[2].name) {
        show_discharged_options.value = true;
      } else {
        show_discharged_options.value = false;
      }
      if (ref_type == referralType.value[3].name) {
        show_refer_to_another_clinic.value = true;
      } else {
        show_refer_to_another_clinic.value = false;
      }
      if (ref_type == referralType.value[4].name) {
        show_dead_options.value = true;
      } else {
        show_dead_options.value = false;
      }
    }
    function dataSavedTrigFn() {
      show_dead_options.value = false;
      show_admitted_options.value = false;
      show_discharged_options.value = false;
      show_referred_options.value = false;
      resetSelection();
    }
    const selectedReferralType = (data) => {
      referralType.value.forEach((item) => {
        item.selected = false;
      });
      selected_referral_type.value = data;
      selected_referral_type.value.selected = true;
      listUpdated(selected_referral_type.value);
    };
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      return openBlock(), createBlock(unref(IonList), null, {
        default: withCtx(() => [
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(unref(IonCol), null, {
                default: withCtx(() => [
                  true ? (openBlock(), createBlock(DynamicDispositionList, {
                    key: 0,
                    "onUpdate:removeItem": removeItem,
                    "onUpdate:editItem": editItem,
                    displayData: outcomes.value
                  }, null, 8, ["displayData"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          showEmptyMsg.value ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
            default: withCtx(() => [
              createBaseVNode("span", _hoisted_1$3, toDisplayString(initialMsg.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_component_ion_row, null, {
            default: withCtx(() => [
              createVNode(unref(IonCol), null, {
                default: withCtx(() => [
                  showAddItemButton.value ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
                    createVNode(_component_ion_row, null, {
                      default: withCtx(() => [
                        createVNode(unref(script), {
                          modelValue: selected_referral_type.value,
                          "onUpdate:modelValue": [
                            _cache[0] || (_cache[0] = ($event) => selected_referral_type.value = $event),
                            _cache[1] || (_cache[1] = ($event) => selectedReferralType($event))
                          ],
                          multiple: false,
                          taggable: false,
                          "hide-selected": true,
                          "close-on-select": true,
                          openDirection: "top",
                          "tag-placeholder": "find and select a referral type",
                          placeholder: "find and select a referral type",
                          selectLabel: "",
                          label: "name",
                          searchable: true,
                          disabled: false,
                          onSearchChange: () => {
                          },
                          "track-by": "name",
                          options: referralType.value
                        }, null, 8, ["modelValue", "options"]),
                        createBaseVNode("div", null, [
                          show_error_msg_for_ref_type.value ? (openBlock(), createBlock(unref(IonLabel), {
                            key: 0,
                            class: "error-label"
                          }, {
                            default: withCtx(() => [..._cache[2] || (_cache[2] = [
                              createTextVNode(toDisplayString("please select a type"), -1)
                            ])]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          show_admitted_options.value ? (openBlock(), createBlock(AdmittedforShortStayOutcomef, {
            key: 1,
            onDataSaved: dataSavedTrigFn,
            selected_ward_prop: selected_ward_data.value,
            admitted_other_props: admitted_other_data.value
          }, null, 8, ["selected_ward_prop", "admitted_other_props"])) : createCommentVNode("", true),
          show_referred_options.value ? (openBlock(), createBlock(ReferredOutCome, {
            key: 2,
            onDataSaved: dataSavedTrigFn,
            selected_referral_data: selected_referral_type_data.value,
            selected_other_referral_data: selected_referral_data.value
          }, null, 8, ["selected_referral_data", "selected_other_referral_data"])) : createCommentVNode("", true),
          show_discharged_options.value ? (openBlock(), createBlock(DischargedHome, {
            key: 3,
            onDataSaved: dataSavedTrigFn,
            selected_discharged_prop: selected_discharged_type_data.value,
            selected_discharged_data: selected_discharged_data.value
          }, null, 8, ["selected_discharged_prop", "selected_discharged_data"])) : createCommentVNode("", true),
          show_dead_options.value ? (openBlock(), createBlock(deadOutcome, {
            key: 4,
            onDataSaved: dataSavedTrigFn
          })) : createCommentVNode("", true),
          show_refer_to_another_clinic.value ? (openBlock(), createBlock(ReferToAnotherClinic, {
            key: 5,
            onDataSaved: dataSavedTrigFn
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});

const Outcome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-209d2730"]]);

const _hoisted_1$2 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_2$2 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_3$2 = { class: "" };
const _hoisted_4$2 = { class: "center text_12" };
const __default__$1 = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    is_open: {},
    user_id: {}
  },
  emits: ["closePopover", "save"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function closeModal() {
      emit("closePopover", false);
      modalController.dismiss();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [..._cache[1] || (_cache[1] = [
                    createBaseVNode("div", { style: { "display": "flex", "align-items": "center" } }, [
                      createBaseVNode("b", { style: { "margin-left": "6px" } }, "Patient Outcome")
                    ], -1)
                  ])]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[0] || (_cache[0] = ($event) => closeModal()),
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_1$2, [
                              createBaseVNode("div", _hoisted_2$2, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(closeCircleOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[2] || (_cache[2] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                              ])
                            ])
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
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonContent), { class: "ion-padding" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                createVNode(unref(IonRow), null, {
                  default: withCtx(() => [
                    createVNode(unref(IonCol), null, {
                      default: withCtx(() => [
                        createVNode(Outcome)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar))
          ]),
          _: 1
        })
      ], 64);
    };
  }
});

const _hoisted_1$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_2$1 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_3$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_4$1 = { style: { "font-weight": "600", "font-size": "17px" } };
const _hoisted_5$1 = { style: { "margin-top": "15px", "width": "100%" } };
const _hoisted_6$1 = {
  key: 0,
  class: "error-message"
};
const _hoisted_7$1 = { key: 1 };
const _hoisted_8$1 = {
  slot: "start",
  class: "prefix-container"
};
const _hoisted_9$1 = ["value"];
const _hoisted_10$1 = {
  key: 0,
  class: "error-message"
};
const _hoisted_11$1 = { style: { "font-size": "16px", "font-weight": "600px", "color": "red" } };
const _hoisted_12$1 = { key: 1 };
const _hoisted_13$1 = { style: { "font-weight": "400", "font-size": "19px" } };
const _hoisted_14$1 = { style: { "display": "flex", "align-items": "center" } };
const _hoisted_15$1 = { style: { "font-weight": "400", "font-size": "20px" } };
const _hoisted_16$1 = { style: { "display": "flex", "align-items": "center" } };
const __default__ = defineComponent({
  name: "UpdateNCDNumberModal"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  emits: ["closePopover", "save"],
  setup(__props, { emit: __emit }) {
    const router = useRouter();
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const newNcdNumber = ref("");
    const ncdPrefix = ref("");
    const validationError = ref("");
    const showErrorMessage = ref(false);
    const patientService = new PatientService();
    let errorMessageTimeout = null;
    const validateNumericInput = (event) => {
      const numericValue = event.target.value.replace(/[^0-9]/g, "");
      if (numericValue !== event.target.value) {
        showErrorMessage.value = true;
        if (errorMessageTimeout) {
          clearTimeout(errorMessageTimeout);
        }
        errorMessageTimeout = window.setTimeout(() => {
          showErrorMessage.value = false;
          errorMessageTimeout = null;
        }, 3e3);
        newNcdNumber.value = numericValue;
      }
    };
    const hideErrorMessage = () => {
      showErrorMessage.value = false;
      if (errorMessageTimeout) {
        clearTimeout(errorMessageTimeout);
        errorMessageTimeout = null;
      }
    };
    const isValid = computed(() => {
      return newNcdNumber.value && newNcdNumber.value.trim() !== "";
    });
    const getSuggestedNCDNumber = async () => {
      try {
        const response = await ProgramService.getNextSuggestedNCDNumber();
        const numericPart = response.ncd_number.replace(/^\D+|\s/g, "");
        const prefixPart = response.ncd_number.replace(/\d+/g, "") + "-NCD-";
        newNcdNumber.value = numericPart;
        ncdPrefix.value = prefixPart;
      } catch (error) {
        console.error("Error fetching suggested NCD number:", error);
        validationError.value = "Failed to fetch suggested NCD number (missing SITE Prefix)";
      }
    };
    onMounted(() => {
      getSuggestedNCDNumber();
    });
    watch(
      () => patient.value.ID,
      () => {
        getSuggestedNCDNumber();
      },
      { deep: true }
    );
    const emit = __emit;
    function closeModal() {
      emit("closePopover", false);
      modalController.dismiss();
    }
    function navigationMenu(url) {
      try {
        console.log(url);
        router.push(url);
      } catch (error) {
        console.error(error);
      }
    }
    async function saveAction() {
      try {
        validationError.value = "";
        if (!isValid.value) {
          validationError.value = "Please enter a valid NCD number";
          return;
        }
        const fullNcdNumber = `${ncdPrefix.value}${newNcdNumber.value}`;
        const patientData = await PatientService.findByID(patient.value.patientID);
        for (const indnt of patientData.patient_identifiers) {
          if (indnt.identifier_type === 31) {
            await patientService.updateNCDNumber(indnt.patient_identifier_id, fullNcdNumber);
            emit("save", { newNcdId: fullNcdNumber });
          }
        }
        await savePatientRecord(patient.value);
        closeModal();
      } catch (error) {
        console.error(error);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(IonHeader), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonTitle), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_1$1, [
                      createVNode(unref(IonIcon), {
                        icon: unref(idCardOutline),
                        class: "sub-menu-icon",
                        style: { "font-size": "1.6rem" }
                      }, null, 8, ["icon"]),
                      _cache[3] || (_cache[3] = createBaseVNode("b", { style: { "margin-left": "6px" } }, "Update NCD Number", -1))
                    ])
                  ]),
                  _: 1
                }),
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: _cache[0] || (_cache[0] = ($event) => closeModal()),
                          fill: "solid"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_2$1, [
                              createBaseVNode("div", _hoisted_3$1, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(closeCircleOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[4] || (_cache[4] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Close", -1))
                              ])
                            ])
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
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonContent), { class: "ion-padding" }, {
          default: withCtx(() => [
            createVNode(unref(IonList), null, {
              default: withCtx(() => [
                createVNode(unref(IonItem), { class: "current-ncd-item" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonLabel), null, {
                      default: withCtx(() => [
                        _cache[5] || (_cache[5] = createBaseVNode("h2", null, "Current NCD Number", -1)),
                        createBaseVNode("p", _hoisted_4$1, toDisplayString(unref(patient).NcdID || "Not assigned"), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(unref(IonItem), null, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_5$1, [
                      showErrorMessage.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                        createVNode(unref(IonIcon), {
                          icon: unref(alertCircleOutline),
                          color: "danger"
                        }, null, 8, ["icon"]),
                        _cache[6] || (_cache[6] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600px", "color": "red" } }, "Only numbers are allowed", -1)),
                        createVNode(unref(IonButton), {
                          fill: "clear",
                          size: "small",
                          onClick: hideErrorMessage
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(IonIcon), { icon: unref(closeCircleOutline) }, null, 8, ["icon"])
                          ]),
                          _: 1
                        })
                      ])) : createCommentVNode("", true),
                      !validationError.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
                        _cache[7] || (_cache[7] = createBaseVNode("span", { style: { "font-weight": "600", "font-size": "17px", "color": "grey" } }, "New NCD Number", -1)),
                        createVNode(unref(IonInput), {
                          modelValue: newNcdNumber.value,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => newNcdNumber.value = $event),
                          placeholder: "Enter number",
                          inputmode: "numeric",
                          pattern: "[0-9]*",
                          onInput: validateNumericInput,
                          class: "custom-input"
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_8$1, [
                              createBaseVNode("input", {
                                value: ncdPrefix.value,
                                readonly: "",
                                class: "prefix-part",
                                type: "text"
                              }, null, 8, _hoisted_9$1)
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  _: 1
                }),
                validationError.value ? (openBlock(), createElementBlock("div", _hoisted_10$1, [
                  createVNode(unref(IonText), { color: "danger" }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_11$1, toDisplayString(validationError.value), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                validationError.value ? (openBlock(), createElementBlock("div", _hoisted_12$1, [
                  createVNode(unref(IonButton), {
                    onClick: _cache[2] || (_cache[2] = ($event) => navigationMenu("/set-site-prefix")),
                    fill: "solid",
                    style: { "margin": "14px" }
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("span", _hoisted_13$1, [
                        createBaseVNode("div", _hoisted_14$1, [
                          createVNode(unref(IonIcon), {
                            icon: unref(locationOutline),
                            slot: "start",
                            class: "sub-menu-icon"
                          }, null, 8, ["icon"]),
                          _cache[8] || (_cache[8] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "set Site Prefix", -1))
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(unref(IonFooter), null, {
          default: withCtx(() => [
            createVNode(unref(IonToolbar), null, {
              default: withCtx(() => [
                createVNode(unref(IonButtons), { slot: "end" }, {
                  default: withCtx(() => [
                    createVNode(unref(IonTitle), null, {
                      default: withCtx(() => [
                        createVNode(unref(IonButton), {
                          onClick: saveAction,
                          fill: "solid",
                          disabled: !isValid.value
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_15$1, [
                              createBaseVNode("div", _hoisted_16$1, [
                                createVNode(unref(IonIcon), {
                                  icon: unref(saveOutline),
                                  slot: "start",
                                  class: "sub-menu-icon"
                                }, null, 8, ["icon"]),
                                _cache[9] || (_cache[9] = createBaseVNode("span", { style: { "margin-left": "6px" } }, "Save", -1))
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["disabled"])
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
        })
      ], 64);
    };
  }
});

const UpdateNCDNumberModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c94e31f"]]);

const _hoisted_1 = {
  key: 0,
  style: { "display": "flex", "justify-content": "space-between", "width": "100%" }
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 1,
  style: { "font-weight": "bold", "padding": "1.7px" }
};
const _hoisted_4 = {
  key: 1,
  style: { "display": "flex", "flex-wrap": "wrap", "gap": "20px", "width": "100%" }
};
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 2 };
const _hoisted_8 = { key: 2 };
const _hoisted_9 = { style: { "display": "flex", "flex-wrap": "wrap", "gap": "8px", "width": "100%" } };
const _hoisted_10 = {
  key: 3,
  style: { "display": "flex", "flex-wrap": "wrap", "gap": "20px", "width": "100%" }
};
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { key: 1 };
const _hoisted_13 = { key: 2 };
const _hoisted_14 = { key: 3 };
const _hoisted_15 = {
  key: 4,
  style: { "width": "100%", "text-align": "center", "border-collapse": "collapse", "border": "1px solid black" }
};
const _hoisted_16 = { key: 0 };
const _hoisted_17 = { style: { "border": "1px solid black" } };
const _hoisted_18 = { style: { "border": "1px solid black" } };
const _hoisted_19 = { style: { "border": "1px solid black" } };
const _hoisted_20 = { style: { "border": "1px solid black" } };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NCDVisitLbl",
  props: {
    imageOut: {
      type: Object
    },
    patient: {
      type: Object
    }
  },
  emits: ["label-out"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const lblComponent = ref(null);
    const currentPage = ref(0);
    const stickerWidth = ref("");
    const medicationNumber = ref(4);
    const props = __props;
    const validMedications = computed(() => {
      if (!props.patient?.medications) return [];
      return props.patient.medications.filter((med) => med && (med.name || med.dose || med.frequency || med.quantity));
    });
    const hasVitals = computed(() => {
      const vitals = props.patient?.vitals;
      return vitals && (vitals.height || vitals.weight || vitals.bloodPressure || props.patient?.bloodGlucose);
    });
    const currentMedications = computed(() => {
      const meds = validMedications.value;
      if (meds.length === 0) return [];
      if (currentPage.value === 0) {
        return meds.slice(0, 2);
      } else {
        const startIndex = 2 + (currentPage.value - 1) * medicationNumber.value;
        return meds.slice(startIndex, startIndex + medicationNumber.value);
      }
    });
    const totalPages = computed(() => {
      const totalMeds = validMedications.value.length;
      if (totalMeds <= 2) return 1;
      const remainingAfterFirst = totalMeds - 2;
      return 1 + Math.ceil(remainingAfterFirst / medicationNumber.value);
    });
    const generateImages = async () => {
      const images = [];
      for (let page = 0; page < totalPages.value; page++) {
        currentPage.value = page;
        await new Promise((resolve) => setTimeout(resolve, 100));
        try {
          let dataUrl;
          if (Service.getIsIpPrintersStatus()) {
            dataUrl = await domtoimage.toCanvas(lblComponent.value, {
              height: 300,
              width: 800
            });
          } else {
            dataUrl = await domtoimage.toPng(lblComponent.value, {
              height: 300,
              width: 594
            });
          }
          images.push(dataUrl);
        } catch (error) {
          console.error("Error generating image for page", page, error);
        }
      }
      return images;
    };
    onMounted(async () => {
      try {
        const isIpPrinter = Service.getIsIpPrintersStatus();
        medicationNumber.value = isIpPrinter ? 7 : 4;
        stickerWidth.value = isIpPrinter ? "800px" : "594px";
        const images = await generateImages();
        emit("label-out", images);
        if (typeof props.imageOut === "function") {
          props.imageOut(images);
        }
      } catch (error) {
        console.error("Error generating patient labels:", error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "lblComponent",
        ref: lblComponent,
        id: "container",
        style: normalizeStyle("padding: 15px; width:" + stickerWidth.value)
      }, [
        currentPage.value === 0 && (__props.patient?.latestVisitDate || __props.patient?.patientID) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          __props.patient?.latestVisitDate ? (openBlock(), createElementBlock("span", _hoisted_2, [
            _cache[0] || (_cache[0] = createBaseVNode("b", null, "Visit:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.latestVisitDate), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.patientID ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(__props.patient.patientID), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && (__props.patient?.patientName || __props.patient?.gender || __props.patient?.diagnoses && __props.patient.diagnoses.length > 0) ? (openBlock(), createElementBlock("div", _hoisted_4, [
          __props.patient?.patientName || __props.patient?.gender ? (openBlock(), createElementBlock("span", _hoisted_5, [
            createBaseVNode("b", null, toDisplayString(__props.patient?.patientName) + toDisplayString(__props.patient?.gender ? `(${__props.patient.gender})` : ""), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.prescriber ? (openBlock(), createElementBlock("span", _hoisted_6, [
            _cache[1] || (_cache[1] = createBaseVNode("b", null, "Seen by:", -1)),
            createTextVNode(toDisplayString(__props.patient.prescriber), 1)
          ])) : createCommentVNode("", true),
          __props.patient?.nextAppointment ? (openBlock(), createElementBlock("span", _hoisted_7, [
            _cache[2] || (_cache[2] = createBaseVNode("b", null, "Nxt App:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.nextAppointment), 1)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && __props.patient?.diagnoses && __props.patient.diagnoses.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
          createBaseVNode("span", _hoisted_9, [
            _cache[3] || (_cache[3] = createBaseVNode("b", null, "Diagnoses:", -1)),
            createTextVNode(" " + toDisplayString(__props.patient.diagnoses.filter((d) => d).join(", ")), 1)
          ])
        ])) : createCommentVNode("", true),
        currentPage.value === 0 && hasVitals.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          __props.patient?.vitals?.height ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(__props.patient.vitals.height || ""), 1)) : createCommentVNode("", true),
          __props.patient?.vitals?.weight ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(__props.patient.vitals.weight || ""), 1)) : createCommentVNode("", true),
          __props.patient?.vitals?.bloodPressure ? (openBlock(), createElementBlock("span", _hoisted_13, toDisplayString(__props.patient.vitals.bloodPressure || ""), 1)) : createCommentVNode("", true),
          __props.patient?.bloodGlucose ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(__props.patient.bloodGlucose || ""), 1)) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        currentMedications.value.length > 0 ? (openBlock(), createElementBlock("table", _hoisted_15, [
          currentPage.value === 0 ? (openBlock(), createElementBlock("thead", _hoisted_16, [..._cache[4] || (_cache[4] = [
            createBaseVNode("tr", null, [
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Drug"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Dose"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Freq"),
              createBaseVNode("th", { style: { "border": "1px solid black" } }, "Qty")
            ], -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("tbody", null, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(currentMedications.value, (drug, index) => {
              return openBlock(), createElementBlock("tr", { key: index }, [
                createBaseVNode("td", _hoisted_17, toDisplayString(drug?.name || ""), 1),
                createBaseVNode("td", _hoisted_18, toDisplayString(drug?.dose || ""), 1),
                createBaseVNode("td", _hoisted_19, toDisplayString(drug?.frequency || ""), 1),
                createBaseVNode("td", _hoisted_20, toDisplayString(drug?.quantity || ""), 1)
              ]);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ], 4);
    };
  }
});

const NCDVisitLbl = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cde3e630"]]);

async function printNCDVisitLbl() {
  await printLabel(NCDVisitLbl, {
    copies: 1
  });
}

function usePatientProfile() {
  const isMobile = ref(Capacitor.isNativePlatform());
  const visits = ref([]);
  const event = ref(null);
  const popoverOpen = ref(false);
  const program = ref(null);
  const demographicsStore = useDemographicsStore();
  const patient = demographicsStore.patient;
  const openPopover = (e) => {
    e.stopPropagation();
    popoverOpen.value = false;
    setTimeout(() => {
      event.value = e;
      popoverOpen.value = true;
    }, 50);
  };
  const openPIM = () => {
    createModal(_sfc_main$e, { class: "fullScreenModal" });
  };
  const openRelationshipManagement = () => {
    createModal(RelationshipManagementModal, { class: "large-medium-width-modal" });
  };
  const openOutCome = () => {
    createModal(_sfc_main$2, { class: "large-modal-x10" });
  };
  const openUpdateNCDNUmbers = () => {
    createModal(UpdateNCDNumberModal, { class: "large-modal-x10" });
  };
  const printVisitSummary = async () => {
    if (Service.getProgramID() == 1) {
      printArtVisitLbl(patient.patientID);
    } else if (Service.getProgramID() == 32) {
      await printNCDVisitLbl();
    } else {
      await new PrintoutService().printData("visit");
    }
  };
  const printID = () => {
    new PrintoutService().printData("barcode");
  };
  const formatCurrentAddress = (data) => {
    const addressComponents = [
      data?.personInformation?.current_district,
      data?.personInformation?.current_traditional_authority,
      data?.personInformation?.current_village
    ];
    return addressComponents.filter(Boolean).join(",");
  };
  return {
    isMobile,
    visits,
    event,
    popoverOpen,
    program,
    patient,
    openPopover,
    openPIM,
    openRelationshipManagement,
    openOutCome,
    printVisitSummary,
    printID,
    formatCurrentAddress,
    openUpdateNCDNUmbers
  };
}

export { AdmittedforShortStayOutcomef as A, DynamicDispositionList as D, Outcome as O, ReferredOutCome as R, _sfc_main$e as _, useConfirm as a, DischargedHome as b, ReferToAnotherClinic as c, deadOutcome as d, usePatientProfile as u };
