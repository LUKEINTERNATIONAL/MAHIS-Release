import { s as defineComponent, L as IonIcon, a7 as IonLabel, aA as IonCol, aq as IonItem, x as resolveComponent, y as openBlock, z as createElementBlock, R as renderList, A as createVNode, B as withCtx, a4 as normalizeClass, a5 as createTextVNode, D as toDisplayString, C as createBaseVNode, O as createBlock, H as createCommentVNode, J as Fragment, f as ref, a2 as onMounted, F as unref, bL as IonCard, bb as IonCardHeader, Q as alertCircleOutline, bd as IonCardContent, a6 as IonInput, N as IonButton, G as closeCircleOutline, c as computed, w as watch, ae as IonCheckbox, bJ as IonBadge, ak as IonDatetime, aD as IonToolbar, aE as IonTitle, aF as IonMenu, ap as IonList, I as IonHeader, aG as IonContent, b8 as calendarOutline } from './vendor-DlXvc2CI.js';
import { a4 as popoverConfirmation, n as icons, _ as _export_sfc, bp as useAllegyStore, u as useDemographicsStore, a6 as useUserStore, aq as ConceptService, bE as searchHealthcareEquipmentAllergies, bF as concatenateArrays, aB as ListPicker, S as Service, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning, F as DynamicButton, B as BasicInputField, bG as useNextAppointmentStore, H as HisDate, A as AppointmentService, bH as DrugOrderService, o as createModal, b4 as confirmModal, f as useStatusStore, aK as useClinicalDaysStore, Q as useGlobalPropertyStore, aL as setValueProps, P as PatientService, a as useProgramStore, b2 as useTreatmentPlanStore, bh as useNCDMedicationsStore } from '../index-6vvaor6U.js';
import { l as lodashExports } from './lodash-DXsj9-B5.js';
import { u as useNonPharmaTherapyStore, g as getOPDMedicationRunOutDate } from './nonPharmaTherapyStore-CbV4PQ3g.js';
import { m as mapState } from './pinia-DxIh5T-z.js';
import { A as Appointment } from './ncd_appointment_service-CH-0AymV.js';
import { D as DateInputField } from './DateInputField-D480M0je.js';

const _sfc_main$3 = defineComponent({
  created() {
  },
  components: {
    IonItem,
    IonCol,
    IonLabel,
    IonIcon
  },
  data() {
    return {
      iconsContent: icons,
      localMedicalDrugsList: [...this.$props._selectedMedicalDrugsList]
    };
  },
  props: {
    _selectedMedicalDrugsList: {
      type: Array,
      default: []
    },
    show_actions_buttons: {
      type: Boolean,
      default: true
    },
    highLightBackground: {
      type: String,
      default: "item-native"
    }
  },
  watch: {},
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
        el.style.color = "#636363";
      }
      this.undohighlightActionBtns(item);
    },
    highlightActionBtns(item) {
      const elements = document.getElementsByClassName(item + "_spanlbl");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "inline-block";
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
        this.$emit("remove-item", index);
      }
    },
    editItemAtIndex(index) {
      this.$emit("edit-item", index);
    },
    highLightBnd(item) {
      if (item) {
        if (item.highlightbackground !== void 0 && item.highlightbackground == true) {
          return this.$props.highLightBackground;
        }
      } else {
        return false;
      }
    }
  }
});

const _hoisted_1$3 = ["onMousemove", "onMouseout"];
const _hoisted_2$2 = { class: "route-label" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_ion_icon = resolveComponent("ion-icon");
  return openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.localMedicalDrugsList, (item, index) => {
    return openBlock(), createElementBlock("div", {
      id: "df",
      class: "medication-item",
      key: index,
      onMousemove: ($event) => _ctx.highlightItem(index),
      onMouseout: ($event) => _ctx.undoHighlightItem(index)
    }, [
      createVNode(_component_ion_row, { class: "medication-header" }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, {
            class: normalizeClass(["ion-text-wrap", _ctx.highLightBnd(item)])
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, {
                id: _ctx.asignLblID(index),
                class: "medication-name"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.drugName), 1)
                ]),
                _: 2
              }, 1032, ["id"])
            ]),
            _: 2
          }, 1032, ["class"])
        ]),
        _: 2
      }, 1024),
      createVNode(_component_ion_row, { class: "medication-details" }, {
        default: withCtx(() => [
          createVNode(_component_ion_col, {
            size: "10",
            class: normalizeClass(["ion-text-wrap details-col", _ctx.highLightBnd(item)])
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, { class: "details-text" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.dose) + " / " + toDisplayString(item.frequency) + " / daily / " + toDisplayString(item.duration) + " / until " + toDisplayString(item.prescription) + " ", 1),
                  createBaseVNode("span", _hoisted_2$2, toDisplayString(item.route_name), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["class"]),
          _ctx.show_actions_buttons ? (openBlock(), createBlock(_component_ion_col, {
            key: 0,
            class: normalizeClass([_ctx.highLightBnd(item), "actions-col"]),
            size: "2"
          }, {
            default: withCtx(() => [
              createVNode(_component_ion_label, {
                class: normalizeClass(["action-button", _ctx.asignSpanLblID(index)]),
                onClick: ($event) => _ctx.editItemAtIndex(index)
              }, {
                default: withCtx(() => [
                  createVNode(_component_ion_icon, {
                    icon: _ctx.iconsContent.edit
                  }, null, 8, ["icon"])
                ]),
                _: 1
              }, 8, ["class", "onClick"]),
              createVNode(_component_ion_label, {
                class: normalizeClass(["action-button", _ctx.asignSpanLblID(index)]),
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
          }, 1032, ["class"])) : createCommentVNode("", true)
        ]),
        _: 2
      }, 1024)
    ], 40, _hoisted_1$3);
  }), 128);
}
const DynamicList = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-01c693a3"]]);

const _hoisted_1$2 = {
  key: 0,
  class: "custom-allergy-container"
};
const _hoisted_2$1 = { class: "button-group" };
const __default__$1 = defineComponent({
  watch: {},
  name: "AllergiesComponent"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props, { expose: __expose }) {
    const allergyStore = useAllegyStore();
    const DemographicsStore = useDemographicsStore();
    const userStore = useUserStore();
    const selectedAllergiesList = computed(() => allergyStore.selectedMedicalAllergiesList);
    const patient = computed(() => DemographicsStore.patient);
    const allergiesList = computed(() => allergyStore.medicalAllergiesList);
    const uniqueId = ref(generateUniqueId(8, "item-"));
    const selectedAllergiesList2 = computed(() => allergyStore.selectedMedicalAllergiesList);
    const allergyToAdd = ref("");
    const showOtherInput = ref(false);
    const list_picker_prperties = [
      {
        multi_Selection: true,
        show_list_label: true,
        unqueId: uniqueId.value,
        name_of_list: "Add/Remove allergies",
        placeHolder: "Search for an allergy",
        items: [],
        listUpdatedFN: listUpdated1,
        listFilteredFN: () => {
        },
        searchTextFN: FindAllegicDrugName,
        use_internal_filter: true,
        show_error: ref(false),
        error_message: "please select a User",
        disabled: ref(false)
      }
    ];
    const addingCustomAllergy = ref(false);
    onMounted(async () => {
      checkIfSamePatientInContext();
    });
    const checkIfSamePatientInContext = () => {
      if (allergyStore.current_patient.ID != patient.value.ID) {
        allergyStore.clearSelectedMedicalAllergiesList();
        allergyStore.setCurrentPatient(patient.value);
      }
    };
    function listUpdated1(data) {
      data.forEach((item) => {
        if (item.selected == true && item.name === "Other") {
          showOtherInput.value = item.name === "Other";
        }
        if (item.selected == false && item.name === "Other") {
          cancelCustomAllergy();
        }
      });
      allergyStore.setSelectedMedicalAllergiesList(data);
      setCommonAllergiesList();
    }
    async function FindAllegicDrugName(text) {
      const searchText = text;
      const drugs = await ConceptService.getConceptSet("OPD Medication", searchText);
      if (!drugs) return;
      drugs.map((drug) => ({
        label: drug.name,
        value: drug.name,
        other: drug
      }));
      const temp_data_1 = searchHealthcareEquipmentAllergies(searchText);
      const temp_data_2 = concatenateArrays(temp_data_1, drugs);
      const sortedList = temp_data_2.sort((a, b) => a.name.localeCompare(b.name));
      allergyStore.setMedicalAllergiesList(sortedList);
      setCommonAllergiesList();
    }
    function setCommonAllergiesList() {
      const temp_data_2 = allergiesList.value;
      selectedAllergiesList.value.forEach((selected_alle) => {
        let found = false;
        temp_data_2.forEach((alle_dat_itm, index) => {
          if (alle_dat_itm.concept_id == selected_alle.concept_id && selected_alle.selected === true) {
            temp_data_2[index] = selected_alle;
            found = true;
          }
        });
        if (!found && selected_alle.selected === true) {
          temp_data_2.push(selected_alle);
        }
      });
      const op_ = temp_data_2.filter(
        (item, index, self) => index === self.findIndex((t) => t?.concept_id === item?.concept_id)
      );
      allergyStore.setMedicalAllergiesList(op_);
    }
    function generateUniqueId(length = 8, prefix = "") {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = prefix;
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result += `-${Date.now()}`;
      return result;
    }
    async function addCustomAllergy(allergyName) {
      try {
        const customAllergy = allergyName.trim();
        if (customAllergy) {
          const newAllergy = {
            name: customAllergy,
            selected: true,
            concept_id: generateUniqueId(8, "12"),
            concept_name_id: generateUniqueId(8, "34")
          };
          allergyStore.setMedicalAllergiesList([...allergiesList.value, newAllergy]);
          allergyStore.setSelectedMedicalAllergiesList(newAllergy);
          showOtherInput.value = false;
          addingCustomAllergy.value = true;
          allergyToAdd.value = "";
          const Other = allergyStore.findSelectedAllergyByName("Other");
          allergyStore.unselectOther(Other);
        }
      } catch (error) {
        console.error(error);
      }
    }
    const cancelCustomAllergy = () => {
      showOtherInput.value = false;
      allergyToAdd.value = "";
      addingCustomAllergy.value = false;
      const Other = allergyStore.findSelectedAllergyByName("Other");
      if (Other) {
        allergyStore.unselectOther(Other);
      }
    };
    const onSubmit = async () => {
      try {
        if (lodashExports.isEmpty(selectedAllergiesList2.value)) return;
        const allergicConceptId = await ConceptService.getConceptID("Allergic");
        const allergies = selectedAllergiesList2.value.map((a) => ({
          concept_id: allergicConceptId,
          obs_datetime: Service.getSessionDate(),
          value_coded: a.concept_id,
          location_id: userStore.facilityLocation.code,
          value_text: a.name
        }));
        await ObservationService.addObsToEncounterPatient(allergies, EncounterTypeId.MEDICAL_HISTORY);
        toastSuccess("Allergies appended to patient record successfully");
      } catch {
        toastWarning("Failed to save allergies");
      }
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(IonCard), null, {
        default: withCtx(() => [
          createVNode(unref(IonCardHeader), null, {
            default: withCtx(() => [
              createVNode(unref(IonLabel), { class: "header-container" }, {
                default: withCtx(() => [
                  createVNode(unref(IonIcon), {
                    icon: unref(alertCircleOutline),
                    class: "allergy-icon"
                  }, null, 8, ["icon"]),
                  _cache[3] || (_cache[3] = createBaseVNode("span", { style: { "font-size": "16px", "font-weight": "600" } }, " Allergies (Medication, Healthcare items, Environment and Food) ", -1))
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(unref(IonCardContent), null, {
            default: withCtx(() => [
              createVNode(ListPicker, {
                multiSelection: list_picker_prperties[0].multi_Selection,
                show_label: list_picker_prperties[0].show_list_label,
                uniqueId: list_picker_prperties[0].unqueId,
                name_of_list: list_picker_prperties[0].name_of_list,
                choose_place_holder: list_picker_prperties[0].placeHolder,
                "items_-list": allergiesList.value,
                use_internal_filter: list_picker_prperties[0].use_internal_filter,
                disabled: list_picker_prperties[0].disabled.value,
                onItemListUpDated: list_picker_prperties[0].listUpdatedFN,
                onItemListFiltered: list_picker_prperties[0].listFilteredFN,
                onItemSearchText: list_picker_prperties[0].searchTextFN
              }, null, 8, ["multiSelection", "show_label", "uniqueId", "name_of_list", "choose_place_holder", "items_-list", "use_internal_filter", "disabled", "onItemListUpDated", "onItemListFiltered", "onItemSearchText"]),
              showOtherInput.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
                createVNode(unref(IonInput), {
                  modelValue: allergyToAdd.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allergyToAdd.value = $event),
                  placeholder: "Please specify the allergy",
                  fill: "outline",
                  class: "custom-input"
                }, null, 8, ["modelValue"]),
                createBaseVNode("div", _hoisted_2$1, [
                  createVNode(unref(IonButton), {
                    onClick: _cache[1] || (_cache[1] = ($event) => addCustomAllergy(allergyToAdd.value)),
                    class: "addCustomAllergyBtn"
                  }, {
                    default: withCtx(() => [..._cache[4] || (_cache[4] = [
                      createTextVNode(" Add Allergy ", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(unref(IonButton), {
                    onClick: _cache[2] || (_cache[2] = ($event) => cancelCustomAllergy()),
                    fill: "clear",
                    class: "cancelBtn"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(IonIcon), {
                        icon: unref(closeCircleOutline),
                        slot: "icon-only"
                      }, null, 8, ["icon"])
                    ]),
                    _: 1
                  })
                ])
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});

const Allergies = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-d63cacc6"]]);

const _hoisted_1$1 = { class: "checklist-container" };
const __default__ = defineComponent({
  watch: {},
  name: "xxxComponent"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    const DemographicsStore = useDemographicsStore();
    const patient = computed(() => DemographicsStore.patient);
    const nonPharmaTherapyStore = useNonPharmaTherapyStore();
    const items = nonPharmaTherapyStore.items;
    onMounted(async () => {
      checkIfSamePatientInContext();
    });
    const checkIfSamePatientInContext = () => {
      if (nonPharmaTherapyStore.current_patient.ID != patient.value.ID) {
        nonPharmaTherapyStore.clearSelectednonPharmaTherapyStore();
        nonPharmaTherapyStore.setCurrentPatient(patient.value);
      }
    };
    watch(
      () => patient.value,
      async (newValue) => {
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(items), (item) => {
          return openBlock(), createBlock(unref(IonItem), {
            key: item.id,
            class: "no-border"
          }, {
            default: withCtx(() => [
              createVNode(unref(IonCheckbox), {
                id: item.id,
                modelValue: item.checked,
                "onUpdate:modelValue": ($event) => item.checked = $event,
                slot: "start"
              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"]),
              createVNode(unref(IonLabel), { style: { "font-size": "16px", "font-weight": "600" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.label), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024);
        }), 128))
      ]);
    };
  }
});

const NonPharmacologicalIntervention = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-371e920f"]]);

const _sfc_main = defineComponent({
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    BasicInputField,
    IonDatetime,
    IonBadge,
    DateInputField,
    DynamicButton
  },
  props: {
    showPeripheral: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const clinicalDaysStore = useClinicalDaysStore();
    const appointment_count = ref(0);
    const disabledDates = computed(() => clinicalDaysStore.getDisabledDates());
    const datesCounts = computed(() => clinicalDaysStore.getAssignedAppointments());
    const inputPRDate = ref();
    const show_peripheral = computed(() => props.showPeripheral);
    return {
      disabledDates,
      datesCounts,
      appointment_count,
      calendarOutline,
      inputPRDate,
      show_peripheral
    };
  },
  data() {
    useNextAppointmentStore();
    useProgramStore();
    return {
      iconsContent: icons,
      date: new Date(Service.getSessionDate()),
      tomorrow: new Date(Service.getSessionDate()).getDate() + 1,
      appointment: "",
      drugRunoutDate: "",
      nextAppointmentDate: "",
      minDate: new Date(Service.getSessionDate())
    };
  },
  computed: {
    ...mapState(useNextAppointmentStore, ["nextAppointment", "appointmentCountsCache", "currentSelectedNextAppointmentDate"]),
    ...mapState(useClinicalDaysStore, ["maximumNumberOfDaysForEachDay", "assignedAppointmentsDates"]),
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(useProgramStore, ["activeProgram"]),
    calendarDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      return nextAppointmentStore.currentSelectedNextAppointmentDate ? HisDate.toStandardHisDisplayFormat(nextAppointmentStore.currentSelectedNextAppointmentDate) : "";
    },
    runOutDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      return this.activeProgram?.program_id === 14 ? getOPDMedicationRunOutDate() : nextAppointmentStore.getAppointmentMedicationRunOutDate();
    }
  },
  watch: {
    calendarDate: {
      handler() {
        this.updateNextAppointment();
      },
      deep: true
    },
    "$service.sessionDate": {
      handler() {
        this.updateMinDate();
      },
      immediate: true
    },
    "patient.ID": {
      async handler(newID, oldID) {
        if (newID !== oldID) {
          this.cleanCurrentNextAppointmentDate();
          this.checkIfSamePatientInContext();
          this.clearNextAppointment();
        }
      }
    }
  },
  async mounted() {
    this.checkIfSamePatientInContext();
    await this.getAppointmentMents(this.runOutDate.date);
    await useGlobalPropertyStore().loadGlobalProperty();
    this.validateAppointmentCountsCache();
    await this.preloadAppointmentCounts();
    setValueProps();
    const userID = Service.getUserID();
    const patient = new PatientService();
    this.appointment = new AppointmentService(patient.getID(), userID);
    this.nextAppointmentDate = this.appointment.date;
    this.supposedRunOutDate();
    window.addEventListener("storage", this.handleStorageChange);
    getOPDMedicationRunOutDate();
  },
  beforeUnmount() {
    window.removeEventListener("storage", this.handleStorageChange);
  },
  methods: {
    handleStorageChange(event) {
      if (event.key === "sessionDate") {
        this.updateMinDate();
      }
    },
    updateMinDate() {
      this.date = new Date(Service.getSessionDate());
      this.minDate = new Date(Service.getSessionDate());
    },
    updateNextAppointment() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.setNextAppointment(this.calendarDate);
    },
    async handleDateUpdate(date) {
      if (date) {
        const storeClinicalDaysStore = useClinicalDaysStore();
        storeClinicalDaysStore.setAssignedAppointmentsDates(date, true);
        this.calendarDate = HisDate.toStandardHisDisplayFormat(date);
        await this.save();
        await this.getAppointmentMents(date);
        await this.updateAppointmentCache(date);
        const nextAppointmentStore = useNextAppointmentStore();
        nextAppointmentStore.setCurrentSelectedNextAppointmentDate(date, this.patient.ID);
      }
    },
    async getAppointmentMents(date) {
      const statusStore = useStatusStore();
      if (statusStore.apiStatus) {
        try {
          const res = await AppointmentService.getDailyAppointments(HisDate.toStandardHisFormat(date), HisDate.toStandardHisFormat(date));
          this.appointment_count = res.length;
        } catch (error) {
        }
      }
    },
    getCounter(date) {
      const dateKey = HisDate.toStandardHisFormat(date);
      return this.appointmentCountsCache[dateKey] || "";
    },
    async save() {
      if (this.assignedAppointmentsDates.length > 0) {
        try {
          const appointment_service = new Appointment();
          const appointmentDetails = await appointment_service.createOfflineAppointment();
        } catch (error) {
        }
      }
    },
    async openCornfirmModal(date) {
      this.calendarDate = HisDate.toStandardHisDisplayFormat(date);
      await this.getAppointmentMents(date);
      const handleCancel = (event) => {
      };
      const handleConfirm = async (event) => {
        if (event.detail == true) {
          await this.handleDateUpdate(date);
        }
      };
      const dataToPass = { message: "Are you sure you want to add this Appointment?" };
      createModal(confirmModal, { class: "otherVitalsModal" }, true, dataToPass, { cancel: handleCancel, confirm: handleConfirm });
    },
    async handleInput(date) {
      this.inputPRDate = HisDate.toStandardHisDisplayFormat(date);
      await this.openCornfirmModal(date);
    },
    async supposedRunOutDate() {
      await DrugOrderService.getLastDrugsReceived(this.patient.patientID);
    },
    async preloadAppointmentCounts() {
      try {
        const startDate = new Date(Service.getSessionDate());
        startDate.setDate(1);
        const endDate = new Date(Service.getSessionDate());
        endDate.setMonth(endDate.getMonth() + 2);
        endDate.setDate(0);
        try {
          const appointments = await AppointmentService.getDailyAppointments(
            HisDate.toStandardHisFormat(startDate),
            HisDate.toStandardHisFormat(endDate)
          );
          if (!appointments) return;
          const uniqueAppointments = this.filterUniqueAppointments(appointments);
          const appointmentsByDate = {};
          uniqueAppointments.forEach((appointment) => {
            const appointmentDate = new Date(appointment.appointment_date);
            const dateKey = HisDate.toStandardHisFormat(appointmentDate);
            if (!appointmentsByDate[dateKey]) {
              appointmentsByDate[dateKey] = 0;
            }
            appointmentsByDate[dateKey]++;
          });
          Object.keys(appointmentsByDate).forEach((dateKey) => {
            this.appointmentCountsCache[dateKey] = appointmentsByDate[dateKey];
          });
        } catch (error) {
          console.error(`Error fetching appointments for date range:`, error);
        }
      } catch (error) {
        console.error("Error in preload process:", error);
      }
    },
    // Helper method to filter unique appointments
    filterUniqueAppointments(appointments) {
      const uniqueMap = /* @__PURE__ */ new Map();
      appointments.forEach((appointment) => {
        const key = `${appointment.given_name}_${appointment.family_name}_${appointment.birthdate}_${appointment.appointment_date}`;
        if (!uniqueMap.has(key)) {
          uniqueMap.set(key, appointment);
        }
      });
      return Array.from(uniqueMap.values());
    },
    async updateAppointmentCache(date) {
      try {
        const dateKey = HisDate.toStandardHisFormat(date);
        const appointments = await AppointmentService.getDailyAppointments(
          HisDate.toStandardHisFormat(date),
          HisDate.toStandardHisFormat(date)
        );
        if (!appointments) return;
        this.appointmentCountsCache[dateKey] = appointments.length;
      } catch (error) {
        console.error("Error updating appointment cache:", error);
      }
    },
    validateAppointmentCountsCache() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.checkCurrentLocationIfInContext();
    },
    isRunOutDate(date) {
      if (!this.runOutDate || !this.runOutDate.date) return false;
      return HisDate.toStandardHisFormat(date) === HisDate.toStandardHisFormat(this.runOutDate.date);
    },
    cleanCurrentNextAppointmentDate() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.cleanCurrentSelectedNextAppointmentDate();
    },
    checkIfSamePatientInContext() {
      const nextAppointmentStore = useNextAppointmentStore();
      if (nextAppointmentStore.current_patient.ID != this.patient.ID) {
        this.cleanCurrentNextAppointmentDate();
        nextAppointmentStore.setCurrentPatient(this.patient);
      }
    },
    clearNextAppointment() {
      const nextAppointmentStore = useNextAppointmentStore();
      nextAppointmentStore.clearAppointmentMedicationRunOutDate();
    }
  }
});

const _hoisted_1 = { class: "card_content" };
const _hoisted_2 = { class: "count-badge" };
const _hoisted_3 = { class: "dates_title" };
const _hoisted_4 = { class: "sub_data" };
const _hoisted_5 = { class: "dates_title" };
const _hoisted_6 = { class: "sub_data" };
const _hoisted_7 = { class: "dates_title" };
const _hoisted_8 = { class: "sub_data" };
const _hoisted_9 = { class: "dates_title" };
const _hoisted_10 = { class: "sub_data" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueDatePicker = resolveComponent("VueDatePicker");
  const _component_ion_col = resolveComponent("ion-col");
  const _component_DynamicButton = resolveComponent("DynamicButton");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_row = resolveComponent("ion-row");
  const _component_DateInputField = resolveComponent("DateInputField");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_ion_row, null, {
      default: withCtx(() => [
        createVNode(_component_ion_col, {
          "size-sm": "12",
          "size-md": "12",
          "size-lg": "12",
          "size-xl": "8"
        }, {
          default: withCtx(() => [
            createVNode(_component_VueDatePicker, {
              class: "calender",
              onDateUpdate: _ctx.openCornfirmModal,
              inline: "",
              "auto-apply": "",
              "enable-time-picker": false,
              "disabled-dates": _ctx.disabledDates,
              "min-date": _ctx.minDate,
              modelValue: _ctx.runOutDate.date,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.runOutDate.date = $event)
            }, {
              day: withCtx(({ day, date }) => [
                true ? (openBlock(), createElementBlock("p", {
                  key: 0,
                  class: normalizeClass({ "run-out-date": _ctx.isRunOutDate(date) }),
                  style: { "font-weight": "600", "font-size": "20px" }
                }, [
                  createBaseVNode("span", null, [
                    createTextVNode(toDisplayString(day), 1),
                    createBaseVNode("sup", _hoisted_2, toDisplayString(_ctx.getCounter(date)), 1)
                  ])
                ], 2)) : (openBlock(), createElementBlock(_Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString(day), 1)
                ], 64))
              ]),
              _: 1
            }, 8, ["onDateUpdate", "disabled-dates", "min-date", "modelValue"])
          ]),
          _: 1
        }),
        _ctx.show_peripheral ? (openBlock(), createBlock(_component_ion_col, { key: 0 }, {
          default: withCtx(() => [
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  _cache[3] || (_cache[3] = createBaseVNode("div", null, [
                    createTextVNode("Suggested Next Appointment Date "),
                    createBaseVNode("span", { style: { "font-size": "16px" } }, "(Medication run out date)")
                  ], -1)),
                  createBaseVNode("div", _hoisted_4, [
                    createTextVNode(toDisplayString(_ctx.runOutDate.formattedDate || "No run out date available") + " ", 1),
                    _ctx.runOutDate.formattedDate ? (openBlock(), createBlock(_component_DynamicButton, {
                      key: 0,
                      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleDateUpdate(_ctx.runOutDate.date)),
                      name: "Set Next Appt.",
                      fill: "solid",
                      iconSlot: "icon-only",
                      style: { "float": "right" }
                    })) : createCommentVNode("", true)
                  ])
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_5, [
                  _cache[4] || (_cache[4] = createBaseVNode("div", null, "User set appointment date", -1)),
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.calendarDate), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_7, [
                  _cache[5] || (_cache[5] = createBaseVNode("div", null, "Appointments", -1)),
                  createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.appointment_count), 1)
                ])
              ]),
              _: 1
            }),
            createVNode(_component_ion_item, null, {
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  _cache[6] || (_cache[6] = createBaseVNode("div", null, "Appointment limit (per/day)", -1)),
                  createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.appointment_count) + "/" + toDisplayString(_ctx.maximumNumberOfDaysForEachDay), 1)
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]),
      _: 1
    }),
    _ctx.show_peripheral ? (openBlock(), createBlock(_component_ion_row, { key: 0 }, {
      default: withCtx(() => [
        createVNode(_component_ion_col, { size: "4" }, {
          default: withCtx(() => [
            createVNode(_component_DateInputField, {
              inputHeader: "Preferred Next Appointment Date",
              bold: "600",
              fontSize: "17px",
              placeholderFontSize: "17px",
              placeholderFontWeight: "600",
              unit: "",
              icon: _ctx.calendarOutline,
              placeholder: "press to select date",
              iconRight: "",
              inputWidth: "100%",
              inputValue: _ctx.inputPRDate,
              eventType: "",
              minDate: _ctx.minDate,
              maxDate: "",
              disabled: false,
              "onUpdate:rawDateValue": _cache[2] || (_cache[2] = ($event) => _ctx.handleInput($event))
            }, null, 8, ["icon", "inputValue", "minDate"])
          ]),
          _: 1
        })
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const NextAppointment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4e58e0bc"]]);

function resetPrescribedMedications() {
  useTreatmentPlanStore().clearSelectedMedicalDrugsList();
  useNCDMedicationsStore().clearMedicationDataStores();
}
class PatientSessionManager {
  static instance;
  currentPatientID = null;
  STORAGE_KEY = "current_patient_id";
  constructor() {
    this.loadStoredPatientID();
  }
  // Singleton pattern to ensure only one instance exists
  static getInstance() {
    if (!PatientSessionManager.instance) {
      PatientSessionManager.instance = new PatientSessionManager();
    }
    return PatientSessionManager.instance;
  }
  // Load patient ID from localStorage
  loadStoredPatientID() {
    try {
      const storedID = localStorage.getItem(this.STORAGE_KEY);
      this.currentPatientID = storedID;
    } catch (error) {
      console.error("Error loading patient ID from localStorage:", error);
      this.currentPatientID = null;
    }
  }
  // Save patient ID to localStorage
  savePatientID(patientID) {
    try {
      localStorage.setItem(this.STORAGE_KEY, patientID);
    } catch (error) {
      console.error("Error saving patient ID to localStorage:", error);
    }
  }
  // Remove patient ID from localStorage
  removePatientID() {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (error) {
      console.error("Error removing patient ID from localStorage:", error);
    }
  }
  // Set current patient ID and handle patient change
  setCurrentPatientID(patientID) {
    if (this.currentPatientID !== null && this.currentPatientID !== patientID) {
      console.log(`Patient changed from ${this.currentPatientID} to ${patientID}. Resetting medications.`);
      resetPrescribedMedications();
    }
    this.currentPatientID = patientID;
    this.savePatientID(patientID);
  }
  // Get current patient ID
  getCurrentPatientID() {
    return this.currentPatientID;
  }
  // Clear current patient (for logout or session end)
  clearCurrentPatient() {
    this.currentPatientID = null;
    this.removePatientID();
    resetPrescribedMedications();
  }
  // Check if a patient session is active
  hasActiveSession() {
    return this.currentPatientID !== null;
  }
}
const patientSessionManager = PatientSessionManager.getInstance();

export { Allergies as A, DynamicList as D, NonPharmacologicalIntervention as N, NextAppointment as a, patientSessionManager as p };
