import { u as useDemographicsStore, H as HisDate, z as StandardForm, K as ObservationService, b as EncounterTypeId, G as toastSuccess, t as toastWarning } from '../index-DjGK15Gi.js';
import { s as storeToRefs } from './pinia-BATJJgGh.js';
import { c as computed, s as defineComponent, f as ref, y as openBlock, z as createElementBlock, O as createBlock, F as unref, C as createBaseVNode, D as toDisplayString } from './vendor-6OQ3r7Vr.js';

const adultLevelOfConsciousnessForm = computed(() => {
  return [
    {
      componentType: "radioButtonField",
      header: "Eye opening response",
      name: "Eye opening response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Spontaneously",
          value: "Spontaneously"
        },
        {
          label: "To speech",
          value: "To speech"
        },
        {
          label: "To pain",
          value: "To pain"
        },
        {
          label: "No response",
          value: "No response"
        }
      ]
    },
    { componentType: "Dashes" },
    {
      componentType: "radioButtonField",
      header: "Best verbal response",
      name: "Best verbal response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Oriented to time, place and person",
          value: "Oriented to time, place and person"
        },
        {
          label: "Confused",
          value: "Confused"
        },
        {
          label: "Inappropriate words",
          value: "Inappropriate words"
        },
        {
          label: "Incomprehensible sounds",
          value: "Incomprehensible sounds"
        },
        {
          label: "No response",
          value: "No response"
        }
      ]
    },
    { componentType: "Dashes" },
    {
      componentType: "radioButtonField",
      header: "Best motor response",
      name: "Best motor response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Obeys commands",
          value: "Obeys commands"
        },
        {
          label: "Moves to localised pain",
          value: "Moves to localised pain"
        },
        {
          label: "Flexion withdrawal from pain",
          value: "Flexion withdrawal from pain"
        },
        {
          label: "Abnormal flexion (decorticate)",
          value: "Abnormal flexion (decorticate)"
        },
        {
          label: "Abnormal extension (decerebrate)",
          value: "Abnormal extension (decerebrate)"
        },
        {
          label: "No response",
          value: "No response"
        }
      ]
    }
  ];
});
const minorLevelOfConsciousnessForm = computed(() => {
  return [
    {
      componentType: "radioButtonField",
      header: "Eye opening response",
      name: "Eye opening response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Directed eye movements",
          value: "Directed eye movements"
        },
        {
          label: "Not directed",
          value: "Not directed"
        }
      ]
    },
    { componentType: "Dashes" },
    {
      componentType: "radioButtonField",
      header: "Best verbal response",
      name: "Best verbal response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Appropriate cry",
          value: "Appropriate cry"
        },
        {
          label: "Inappropriate cry or moan",
          value: "Inappropriate cry or moan"
        },
        {
          label: "No cry",
          value: "No cry"
        }
      ]
    },
    { componentType: "Dashes" },
    {
      componentType: "radioButtonField",
      header: "Best motor response",
      name: "Best motor response",
      obsValueType: "value_coded",
      type: "inline",
      options: [
        {
          label: "Localizes pain",
          value: "Localizes pain"
        },
        {
          label: "Withdraws from pain",
          value: "Withdraws from pain"
        },
        {
          label: "Non specific or no response",
          value: "Non specific or no response"
        }
      ]
    }
  ];
});
const eyeOpeningWeights = {
  Spontaneously: 4,
  "To speech": 3,
  "To pain": 2,
  "No response": 1
};
const verbalResponseWeights = {
  "Oriented to time, place and person": 5,
  Confused: 4,
  "Inappropriate words": 3,
  "Incomprehensible sounds": 2,
  "No response": 1
};
const motorResponseWeights = {
  "Obeys commands": 6,
  "Moves to localised pain": 5,
  "Flexion withdrawal from pain": 4,
  "Abnormal flexion (decorticate)": 3,
  "Abnormal extension (decerebrate)": 2,
  "No response": 1
};
const eyeOpeningMinorWeights = {
  "Not directed": 0,
  "Directed eye movements": 1
};
const motorResponseMinorWeights = {
  "Non specific or no response": 0,
  "Withdraws from pain": 1,
  "Localizes pain": 2
};
const verbalResponseMinorWeights = {
  "No cry": 0,
  "Inappropriate cry or moan": 1,
  "Appropriate cry": 2
};

const _hoisted_1 = { class: "modal_wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LevelOfConsciousness",
  setup(__props, { expose: __expose }) {
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const patientAge = ref(HisDate.getAgeInYears(patient?.value?.personInformation?.birthdate));
    const formRef = ref(null);
    const gcs = computed(() => {
      const formValues = formRef.value?.getFormValues() || {};
      const eye = formValues["Eye opening response"] || "";
      const motor = formValues["Best motor response"] || "";
      const verbal = formValues["Best verbal response"] || "";
      const isMinor = patientAge.value < 18;
      const eyeWeight = (isMinor ? eyeOpeningMinorWeights : eyeOpeningWeights)[eye] ?? 0;
      const motorWeight = (isMinor ? motorResponseMinorWeights : motorResponseWeights)[motor] ?? 0;
      const verbalWeight = (isMinor ? verbalResponseMinorWeights : verbalResponseWeights)[verbal] ?? 0;
      const total = eyeWeight + motorWeight + verbalWeight;
      return `(M ${motorWeight} V ${verbalWeight} E ${eyeWeight}) ${total}/${isMinor ? 5 : 15}`;
    });
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return;
      }
      const formValues = formRef.value?.getFormValues() || {};
      if (formValues["Eye opening response"] || formValues["Best motor response"] || formValues["Best verbal response"]) {
        await ObservationService.buildAddObsToEncounterPatient(formValues, EncounterTypeId.ASSESSMENT);
        formRef.value.resetForm();
        toastSuccess("Level of Consciousness saved successfully");
      } else toastWarning(" No level of consciousness data to save ");
    };
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        patientAge.value < 18 ? (openBlock(), createBlock(StandardForm, {
          key: 0,
          subtitle: "GCS (Glasgow Comma Scale)",
          formData: unref(minorLevelOfConsciousnessForm),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])) : (openBlock(), createBlock(StandardForm, {
          key: 1,
          subtitle: "GCS (Glasgow Comma Scale)",
          formData: unref(adultLevelOfConsciousnessForm),
          ref_key: "formRef",
          ref: formRef
        }, null, 8, ["formData"])),
        createBaseVNode("h5", null, toDisplayString(gcs.value), 1)
      ]);
    };
  }
});

export { _sfc_main as _, eyeOpeningWeights as a, motorResponseWeights as b, verbalResponseWeights as c, eyeOpeningMinorWeights as e, motorResponseMinorWeights as m, verbalResponseMinorWeights as v };
