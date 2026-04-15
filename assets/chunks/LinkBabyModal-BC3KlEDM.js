import { u as useDemographicsStore, z as StandardForm, F as DynamicButton, r as StandardModal, t as toastWarning, b7 as RelationshipService, J as savePatientRecord, K as ObservationService, b as EncounterTypeId, G as toastSuccess, n as icons, _ as _export_sfc } from '../index-BGCOT9Zw.js';
import { s as defineComponent, x as resolveComponent, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, F as unref, b1 as personOutline, c as computed, f as ref, K as modalController } from './vendor-DdMq-dB8.js';
import { F as FindRegisterPatient } from './FindRegisterPatient-BCR-rvNh.js';
import { l as lodashExports } from './lodash-e4diTJ41.js';

const _hoisted_1 = { class: "ion-padding" };
const _hoisted_2 = {
  class: "custom-card",
  style: { "border": "1px dotted #ececec", "border-radius": "8px" }
};
const CHILD_RELATIONSHIP_TYPE_ID = 32;
const _sfc_main = /* @__PURE__ */ defineComponent({
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
          createBaseVNode("div", _hoisted_1, [
            createVNode(FindRegisterPatient, {
              patient: babyRecord.value,
              onValueChanged: _cache[0] || (_cache[0] = (fieldName, value) => setBabyDemographics(fieldName, value))
            }, null, 8, ["patient"]),
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("div", _hoisted_2, [
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

const LinkBabyModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4006414c"]]);

export { LinkBabyModal as L };
