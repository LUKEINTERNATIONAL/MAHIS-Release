import { u as useDemographicsStore, n as icons, z as StandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, aq as ConceptService, a_ as List, F as DynamicButton, C as useExposeFromStandardForm, a1 as modifyFieldValue, S as Service, y as StandardValidations, _ as _export_sfc } from '../index-Dy9Id4fM.js';
import { s as storeToRefs } from './pinia-BgytB2RM.js';
import { c as computed, s as defineComponent, w as watch, a2 as onMounted, n as nextTick, y as openBlock, O as createBlock, f as ref, z as createElementBlock, x as resolveComponent, A as createVNode, H as createCommentVNode, B as withCtx, C as createBaseVNode, F as unref, ap as IonItem, a5 as createTextVNode, J as Fragment } from './vendor-BIA1Qh8a.js';
import { u as usePresentingComplaintsStore, p as previousComplaints } from './previousComplaints-D_NOVsrC.js';
import { P as PatientComplaintsService } from './patient_complaints_service-DEQzXM6p.js';
import { D as DashBox } from './DashBox-6iiCilZ5.js';

const usePhysicalExaminationForm = () => {
  const demographicsStore = useDemographicsStore();
  const { patient } = storeToRefs(demographicsStore);
  const resetForm = () => {
  };
  const physicalExaminationFormSection = computed(() => {
    const gender = patient.value?.personInformation?.gender;
    const isMale = gender === "M";
    const isFemale = gender === "F";
    return [
      // ========== MAIN QUESTION ==========
      {
        componentType: "radioButtonField",
        header: "Has physical examination been done?",
        name: "Physical examination",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        onChange: (value, allFormValues) => {
          if (value === "No") {
            return {
              "Eyes normal": "",
              "Abnormality for eyes": [],
              "Other eye abnormality notes": "",
              "Mouth normal": "",
              "Abnormality for  mouth": [],
              "Other mouth abnormality notes": "",
              "Ears normal": "",
              "Abnormality for ears": [],
              "Other ears abnormality notes": "",
              "Face normal": "",
              "Abnormality for face": [],
              "Other face abnormality notes": "",
              "Neck normal": "",
              "Abnormality for neck": [],
              "Other neck abnormality notes": "",
              "Chest inspection normal": "",
              "Abnormality for  chest inspection": [],
              "Other chest abnormality notes": "",
              "Chest movements": "",
              "Heart sounds normal": "",
              "Heart sounds abnormality": [],
              "Breath sounds normal": "",
              "Breath sounds abnormality": [],
              "Abnormalities when added": [],
              "Abdominal inspection normal": "",
              "Abdominal inspection abnormality": [],
              "Other abdominal abnormality notes": "",
              "Abdominal auscultation normal": "",
              "Abdominal auscultation abnormality": [],
              "Other abdominal auscultation abnormality notes": "",
              "Bowel sounds abnormality": [],
              "Abdominal palpation normal": "",
              "Abdominal palpation abnormality": [],
              "Other abdominal palpation abnormality notes": "",
              "Genital examination normal": "",
              "Genital examination abnormality": [],
              "Urethral meatus abnormalities": [],
              "Vulva inspection abnormalities": [],
              "Other genital abnormality notes": "",
              "Extremities normal": "",
              "Abnormality for extremities": [],
              "Other extremities abnormalities notes": ""
            };
          }
        }
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== REASON IF NOT DONE ==========
      {
        componentType: "radioButtonField",
        header: "Reason why physical examination not done?",
        name: "Reason why physical examination not done",
        options: [
          { value: "Condition does not necessitate assessment", label: "Condition does not necessitate assessment" },
          { value: "Patient refused to consent", label: "Patient refused to consent" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "No"
      },
      // ========== EYES SECTION ==========
      {
        componentType: "radioButtonField",
        header: "Eyes normal?",
        name: "Eyes normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        // Clear eye abnormalities when switching to "Yes"
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for eyes": [],
              "Other eye abnormality notes": ""
            };
          }
        }
      },
      // EYE ABNORMALITIES
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on eyes?",
        name: "Abnormality for eyes",
        type: "multiple",
        options: [
          { value: "Pallor", label: "Pallor" },
          { value: "Jaundice", label: "Jaundice" },
          { value: "Ulcerations", label: "Ulcerations" },
          { value: "Other eye abnormality", label: "Other eye abnormality" }
        ],
        grid: { s: "12" },
        // ONLY show if: Physical exam is "Yes" AND Eyes are "No"
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Eyes normal"] === "No",
        // Clear other notes when abnormalities change
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other eye abnormality")) {
            return {
              "Other eye abnormality notes": ""
            };
          }
        }
      },
      // OTHER EYE ABNORMALITY NOTES
      {
        componentType: "inputField",
        header: "Specify eye abnormality",
        name: "Other eye abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        // ONLY show if: Physical exam is "Yes" AND Eyes are "No" AND "Other eye abnormality" is selected
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Eyes normal"] === "No" && Array.isArray(allFormValues["Abnormality for eyes"]) && allFormValues["Abnormality for eyes"].includes("Other eye abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== MOUTH SECTION ==========
      {
        componentType: "radioButtonField",
        header: "Mouth normal?",
        name: "Mouth normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for  mouth": [],
              "Other mouth abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities in the mouth?",
        name: "Abnormality for  mouth",
        type: "multiple",
        options: [
          { value: "Oral thrush", label: "Oral thrush" },
          { value: "Kaposi's Sarcoma lesions", label: "Kaposi's Sarcoma lesions" },
          { value: "Sores", label: "Sores" },
          { value: "Other mouth abnormality", label: "Other mouth abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Mouth normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other mouth abnormality")) {
            return {
              "Other mouth abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify mouth abnormality",
        name: "Other mouth abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Mouth normal"] === "No" && Array.isArray(allFormValues["Abnormality for  mouth"]) && allFormValues["Abnormality for  mouth"].includes("Other mouth abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== EARS SECTION ==========
      {
        componentType: "radioButtonField",
        header: "Ears normal?",
        name: "Ears normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for ears": [],
              "Other ears abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on ears?",
        name: "Abnormality for ears",
        type: "multiple",
        options: [
          { value: "Ear discharge", label: "Ear discharge" },
          { value: "Bleeding", label: "Bleeding" },
          { value: "Other ears abnormality", label: "Other ears abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Ears normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other ears abnormality")) {
            return {
              "Other ears abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify ears abnormality",
        name: "Other ears abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Ears normal"] === "No" && Array.isArray(allFormValues["Abnormality for ears"]) && allFormValues["Abnormality for ears"].includes("Other ears abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== FACE SECTION ==========
      {
        componentType: "radioButtonField",
        header: "Face normal?",
        name: "Face normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for face": [],
              "Other face abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on face?",
        name: "Abnormality for face",
        type: "multiple",
        options: [
          { value: "Rash", label: "Rash" },
          { value: "Swelling", label: "Swelling" },
          { value: "Other face abnormality", label: "Other face abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Face normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other face abnormality")) {
            return {
              "Other face abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify face abnormality",
        name: "Other face abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Face normal"] === "No" && Array.isArray(allFormValues["Abnormality for face"]) && allFormValues["Abnormality for face"].includes("Other face abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== NECK SECTION ==========
      {
        componentType: "radioButtonField",
        header: "Neck normal?",
        name: "Neck normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for neck": [],
              "Other neck abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on the neck?",
        name: "Abnormality for neck",
        type: "multiple",
        options: [
          { value: "Neck rash", label: "Neck rash" },
          { value: "Swelling", label: "Swelling" },
          { value: "Neck mass", label: "Neck mass" },
          { value: "Other neck abnormality", label: "Other neck abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Neck normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other neck abnormality")) {
            return {
              "Other neck abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify neck abnormality",
        name: "Other neck abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Neck normal"] === "No" && Array.isArray(allFormValues["Abnormality for neck"]) && allFormValues["Abnormality for neck"].includes("Other neck abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== CHEST INSPECTION ==========
      {
        componentType: "radioButtonField",
        header: "Chest inspection normal?",
        name: "Chest inspection normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for  chest inspection": [],
              "Other chest abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on the chest?",
        name: "Abnormality for  chest inspection",
        type: "multiple",
        options: [
          { value: "Chest rash", label: "Chest rash" },
          { value: "Chest burns", label: "Chest burns" },
          { value: "Chest bruises", label: "Chest bruises" },
          { value: "Chest wounds", label: "Chest wounds" },
          { value: "Other chest abnormality", label: "Other chest abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Chest inspection normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other chest abnormality")) {
            return {
              "Other chest abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify chest abnormality",
        name: "Other chest abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Chest inspection normal"] === "No" && Array.isArray(allFormValues["Abnormality for  chest inspection"]) && allFormValues["Abnormality for  chest inspection"].includes("Other chest abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== CHEST MOVEMENTS ==========
      {
        componentType: "radioButtonField",
        header: "Chest movement?",
        name: "Chest movements",
        options: [
          { value: "Symmetrical", label: "Symmetrical" },
          { value: "Asymmetrical", label: "Asymmetrical" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes"
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== HEART SOUNDS ==========
      {
        componentType: "radioButtonField",
        header: "Heart sounds normal?",
        name: "Heart sounds normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Heart sounds abnormality": []
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on the heart sounds?",
        name: "Heart sounds abnormality",
        type: "multiple",
        options: [
          { value: "Loud P2", label: "Loud P2" },
          { value: "Splitting P2", label: "Splitting P2" },
          { value: "Gallop rhythm", label: "Gallop rhythm" },
          { value: "Murmur", label: "Murmur" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Heart sounds normal"] === "No"
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== BREATH SOUNDS ==========
      {
        componentType: "radioButtonField",
        header: "Breath sounds normal?",
        name: "Breath sounds normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Breath sounds abnormality": [],
              "Abnormalities when added": []
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on the breath sounds?",
        name: "Breath sounds abnormality",
        type: "multiple",
        options: [
          { value: "Absent", label: "Absent" },
          { value: "Reduced", label: "Reduced" },
          { value: "Added", label: "Added" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Breath sounds normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Added")) {
            return {
              "Abnormalities when added": []
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on the breath sounds are Added?",
        name: "Abnormalities when added",
        type: "multiple",
        options: [
          { value: "Crackles", label: "Crackles" },
          { value: "Wheezes", label: "Wheezes" },
          { value: "Bronchial", label: "Bronchial" },
          { value: "Crepitations", label: "Crepitations" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Breath sounds normal"] === "No" && Array.isArray(allFormValues["Breath sounds abnormality"]) && allFormValues["Breath sounds abnormality"].includes("Added")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== ABDOMINAL INSPECTION ==========
      {
        componentType: "radioButtonField",
        header: "Abdominal inspection normal?",
        name: "Abdominal inspection normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abdominal inspection abnormality": [],
              "Other abdominal abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities after Abdominal inspection?",
        name: "Abdominal inspection abnormality",
        type: "multiple",
        options: [
          { value: "Abdominal distension", label: "Abdominal distension" },
          { value: "Abdominal rash", label: "Abdominal rash" },
          { value: "Abdominal wounds", label: "Abdominal wounds" },
          { value: "Laceration", label: "Laceration" },
          { value: "Abdominal bruises", label: "Abdominal bruises" },
          { value: "Abdominal burns", label: "Abdominal burns" },
          { value: "Other abdominal abnormality", label: "Other abdominal abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal inspection normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other abdominal abnormality")) {
            return {
              "Other abdominal abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify abdominal abnormality",
        name: "Other abdominal abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal inspection normal"] === "No" && Array.isArray(allFormValues["Abdominal inspection abnormality"]) && allFormValues["Abdominal inspection abnormality"].includes("Other abdominal abnormality")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== ABDOMINAL AUSCULTATION ==========
      {
        componentType: "radioButtonField",
        header: "Abdominal auscultation normal?",
        name: "Abdominal auscultation normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abdominal auscultation abnormality": [],
              "Other abdominal auscultation abnormality notes": "",
              "Bowel sounds abnormality": []
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abdominal auscultation abnormalities?",
        name: "Abdominal auscultation abnormality",
        type: "multiple",
        options: [
          { value: "Bruit", label: "Bruit" },
          { value: "Hyperactive", label: "Hyperactive" },
          { value: "Reduced bowel sounds", label: "Reduced bowel sounds" },
          { value: "Other", label: "Other" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal auscultation normal"] === "No",
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value?.includes("Reduced bowel sounds")) {
            updates["Bowel sounds abnormality"] = [];
          }
          if (!value?.includes("Other")) {
            updates["Other abdominal auscultation abnormality notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities on bowel sounds?",
        name: "Bowel sounds abnormality",
        type: "multiple",
        options: [
          { value: "Reduced bowel sounds", label: "Reduced bowel sounds" },
          { value: "Abdominal auscultation absent", label: "Abdominal auscultation absent" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal auscultation normal"] === "No" && Array.isArray(allFormValues["Abdominal auscultation abnormality"]) && allFormValues["Abdominal auscultation abnormality"].includes("Reduced bowel sounds")
      },
      {
        componentType: "inputField",
        header: "Specify abdominal auscultation abnormality",
        name: "Other abdominal auscultation abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal auscultation normal"] === "No" && Array.isArray(allFormValues["Abdominal auscultation abnormality"]) && allFormValues["Abdominal auscultation abnormality"].includes("Other")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== ABDOMINAL PALPATION ==========
      {
        componentType: "radioButtonField",
        header: "Abdominal palpation normal?",
        name: "Abdominal palpation normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abdominal palpation abnormality": [],
              "Other abdominal palpation abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abdominal palpation abnormalities?",
        name: "Abdominal palpation abnormality",
        type: "multiple",
        options: [
          { value: "Tenderness", label: "Tenderness" },
          { value: "Splenomegaly", label: "Splenomegaly" },
          { value: "Kidney ballotable", label: "Kidney ballotable" },
          { value: "Other masses", label: "Other masses" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal palpation normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other masses")) {
            return {
              "Other abdominal palpation abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify abdominal palpation abnormality",
        name: "Other abdominal palpation abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Abdominal palpation normal"] === "No" && Array.isArray(allFormValues["Abdominal palpation abnormality"]) && allFormValues["Abdominal palpation abnormality"].includes("Other masses")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== GENITAL EXAMINATION ==========
      {
        componentType: "radioButtonField",
        header: "Genital examination normal?",
        name: "Genital examination normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Genital examination abnormality": [],
              "Urethral meatus abnormalities": [],
              "Vulva inspection abnormalities": [],
              "Other genital abnormality notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities after genital examination?",
        name: "Genital examination abnormality",
        type: "multiple",
        options: [
          { value: "Warts", label: "Warts" },
          { value: "Vesicles", label: "Vesicles" },
          { value: "Growths", label: "Growths" },
          { value: "Genital sores", label: "Genital sores" },
          {
            value: "Scrotal swelling",
            label: "Scrotal swelling",
            disabled: isFemale
          },
          {
            value: "Tastes swelling",
            label: "Tastes swelling",
            disabled: isFemale
          },
          {
            value: "Urethral meatus abnormal",
            label: "Urethral meatus abnormal",
            disabled: isFemale
          },
          {
            value: "Vulva examination",
            label: "Vulva examination",
            disabled: isMale
          },
          {
            value: "Visible bleeding",
            label: "Visible bleeding",
            disabled: isMale
          },
          { value: "Other genital abnormalities", label: "Other genital abnormalities" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Genital examination normal"] === "No",
        onChange: (value, allFormValues) => {
          const updates = {};
          if (!value?.includes("Urethral meatus abnormal")) {
            updates["Urethral meatus abnormalities"] = [];
          }
          if (!value?.includes("Vulva examination")) {
            updates["Vulva inspection abnormalities"] = [];
          }
          if (!value?.includes("Other genital abnormalities")) {
            updates["Other genital abnormality notes"] = "";
          }
          return updates;
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the urethral meatus abnormalities for the patient?",
        name: "Urethral meatus abnormalities",
        type: "multiple",
        options: [
          { value: "Oedema", label: "Oedema" },
          { value: "Abnormal discharge", label: "Abnormal discharge" },
          { value: "Bleeding", label: "Bleeding" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Genital examination normal"] === "No" && isMale && Array.isArray(allFormValues["Genital examination abnormality"]) && allFormValues["Genital examination abnormality"].includes("Urethral meatus abnormal")
      },
      {
        componentType: "checkboxField",
        header: "What Vulva abnormalities does the patient have?",
        name: "Vulva inspection abnormalities",
        type: "multiple",
        options: [
          { value: "Oedematous cervix", label: "Oedematous cervix" },
          { value: "Abnormal vaginal discharge", label: "Abnormal vaginal discharge" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Genital examination normal"] === "No" && isFemale && Array.isArray(allFormValues["Genital examination abnormality"]) && allFormValues["Genital examination abnormality"].includes("Vulva examination")
      },
      {
        componentType: "inputField",
        header: "Specify genital abnormality",
        name: "Other genital abnormality notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Genital examination normal"] === "No" && Array.isArray(allFormValues["Genital examination abnormality"]) && allFormValues["Genital examination abnormality"].includes("Other genital abnormalities")
      },
      { grid: { s: "12" }, componentType: "Dashes" },
      // ========== EXTREMITIES ==========
      {
        componentType: "radioButtonField",
        header: "Extremities normal?",
        name: "Extremities normal",
        options: [
          { value: "Yes", label: "Yes" },
          { value: "No", label: "No" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes",
        onChange: (value, allFormValues) => {
          if (value === "Yes") {
            return {
              "Abnormality for extremities": [],
              "Other extremities abnormalities notes": ""
            };
          }
        }
      },
      {
        componentType: "checkboxField",
        header: "What are the abnormalities for extremities?",
        name: "Abnormality for extremities",
        type: "multiple",
        options: [
          { value: "Cold and clammy", label: "Cold and clammy" },
          { value: "Generalized oedema", label: "Generalized oedema" },
          { value: "Fracture", label: "Fracture" },
          { value: "Extremity burns", label: "Extremity burns" },
          { value: "Extremity rash", label: "Extremity rash" },
          { value: "Deformity", label: "Deformity" },
          { value: "Finger clubbing", label: "Finger clubbing" },
          { value: "Decreased Power", label: "Decreased Power" },
          { value: "Decreased Sensation", label: "Decreased Sensation" },
          { value: "Other extremities abnormality", label: "Other extremities abnormality" }
        ],
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Extremities normal"] === "No",
        onChange: (value, allFormValues) => {
          if (!value?.includes("Other extremities abnormality")) {
            return {
              "Other extremities abnormalities notes": ""
            };
          }
        }
      },
      {
        componentType: "inputField",
        header: "Specify extremity abnormality",
        name: "Other extremities abnormalities notes",
        icon: icons.editPen,
        grid: { s: "12" },
        condition: (allFormValues) => allFormValues["Physical examination"] === "Yes" && allFormValues["Extremities normal"] === "No" && Array.isArray(allFormValues["Abnormality for extremities"]) && allFormValues["Abnormality for extremities"].includes("Other extremities abnormality")
      }
    ];
  });
  return {
    resetForm,
    physicalExaminationFormSection
  };
};

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PhysicalExamination",
  setup(__props, { expose: __expose }) {
    const physicalExamFormComposable = usePhysicalExaminationForm();
    const formRef = ref(null);
    const formKey = ref(0);
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    watch(
      () => patient.value?.patientID,
      async (newPatientID, oldPatientID) => {
        if (newPatientID && newPatientID !== oldPatientID) {
          formKey.value++;
          await nextTick();
        }
      }
    );
    const onSubmit = async () => {
      if (!formRef.value) {
        console.error("Form reference is not available");
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formData = formRef.value.getFormValues();
      const physicalExaminationData = await processPhysicalExamination(formData);
      if (physicalExaminationData.length === 0) {
        toastWarning("No physical examination data to save");
        return false;
      }
      await ObservationService.addObsToEncounterPatient(physicalExaminationData, EncounterTypeId.PHYSICAL_EXAMINATION);
      formKey.value++;
      await nextTick();
      toastSuccess("Physical examination saved successfully");
      return true;
    };
    const processPhysicalExamination = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") continue;
        if (typeof value === "boolean" && value === true) {
          observations.push(await ObservationService.buildValueText("Physical examination finding", key));
        } else if (typeof value === "string") {
          observations.push(await ObservationService.buildValueText(key, value));
        }
      }
      return observations;
    };
    onMounted(async () => {
      await nextTick();
    });
    const physicalExaminationForm = computed(() => {
      return physicalExamFormComposable.physicalExaminationFormSection.value;
    });
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm: () => {
        formKey.value++;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardForm, {
        formData: physicalExaminationForm.value,
        ref_key: "formRef",
        ref: formRef,
        key: formKey.value
      }, null, 8, ["formData"]);
    };
  }
});

const _hoisted_1$1 = { class: "modal_wrapper" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PregnancyBreastfeeding",
  setup(__props, { expose: __expose }) {
    const formRef = ref(null);
    const formKey = ref(0);
    const pregnancyForm = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          header: "Are you pregnant?",
          name: "Patient pregnant",
          options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
          ],
          grid: { s: "12" }
        },
        {
          grid: { s: "12" },
          componentType: "Dashes"
        },
        {
          componentType: "radioButtonField",
          header: "Breastfeeding?",
          name: "Is patient breast feeding?",
          options: [
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" }
          ],
          grid: { s: "12" }
        }
      ];
    });
    const processPregnancyData = async (data) => {
      const observations = [];
      for (const [key, value] of Object.entries(data)) {
        if (!value || value === false || value === "") {
          continue;
        }
        if (typeof value === "string") {
          try {
            const valueConcept = await ConceptService.getConceptID(value, true);
            if (valueConcept) {
              observations.push(await ObservationService.buildValueCoded(key, valueConcept));
            } else {
              observations.push(await ObservationService.buildValueText(key, value));
            }
          } catch (error) {
            observations.push(await ObservationService.buildValueText(key, value));
          }
        }
      }
      return observations;
    };
    const onSubmit = async () => {
      if (!formRef.value) {
        return false;
      }
      const validationErrors = formRef.value.validateForm();
      if (validationErrors) {
        console.log("Validation errors:", validationErrors);
        toastWarning("Please fix validation errors before submitting");
        return false;
      }
      const formData = formRef.value.getFormValues();
      console.log("Form data:", formData);
      const pregnancyData = await processPregnancyData(formData);
      if (pregnancyData.length === 0) {
        toastWarning("No pregnancy status data to save");
        return false;
      }
      await ObservationService.addObsToEncounterPatient(pregnancyData, EncounterTypeId.PREGNANCY_STATUS);
      formKey.value++;
      await nextTick();
      toastSuccess("Pregnancy status saved successfully");
      return true;
    };
    const resetForm = () => {
      formKey.value++;
    };
    __expose({
      validateForm: () => formRef.value?.validateForm(),
      onSubmit,
      resetForm
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        (openBlock(), createBlock(StandardForm, {
          formData: pregnancyForm.value,
          ref_key: "formRef",
          ref: formRef,
          key: formKey.value
        }, null, 8, ["formData"]))
      ]);
    };
  }
});

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
    const demographicsStore = useDemographicsStore();
    const { patient } = storeToRefs(demographicsStore);
    const iconsContent = ref(icons);
    const no_item = ref(true);
    const showAHD = ref(false);
    const search_item = ref(false);
    const show_btn = ref(true);
    const display_item = ref(false);
    const presentingComplaintsList = ref([]);
    const complaints = ref([]);
    const accordionGroup = ref();
    const currentDuration = ref(null);
    const currentUnit = ref(null);
    const validateDurationAgainstBirthdate = (duration, unit) => {
      if (!duration || !unit) {
        return null;
      }
      const birthdate = patient.value?.personInformation?.birthdate;
      if (!birthdate) {
        return null;
      }
      const durationNum = Number(duration);
      if (isNaN(durationNum) || durationNum <= 0) {
        return null;
      }
      const patientBirthdate = new Date(birthdate);
      const today = /* @__PURE__ */ new Date();
      const ageInMilliseconds = today.getTime() - patientBirthdate.getTime();
      let maxDuration;
      switch (unit) {
        case "Hours":
          maxDuration = ageInMilliseconds / (1e3 * 60 * 60);
          break;
        case "Days":
          maxDuration = ageInMilliseconds / (1e3 * 60 * 60 * 24);
          break;
        case "Weeks":
          maxDuration = ageInMilliseconds / (1e3 * 60 * 60 * 24 * 7);
          break;
        case "Months":
          const years = today.getFullYear() - patientBirthdate.getFullYear();
          const months = today.getMonth() - patientBirthdate.getMonth();
          maxDuration = years * 12 + months;
          if (today.getDate() < patientBirthdate.getDate()) {
            maxDuration--;
          }
          break;
        case "Years":
          maxDuration = today.getFullYear() - patientBirthdate.getFullYear();
          if (today.getMonth() < patientBirthdate.getMonth() || today.getMonth() === patientBirthdate.getMonth() && today.getDate() < patientBirthdate.getDate()) {
            maxDuration--;
          }
          break;
        default:
          return null;
      }
      if (durationNum > maxDuration) {
        return "Duration cannot be before patient's birth date";
      }
      return null;
    };
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
            currentDuration.value = value;
            const numberValidation = StandardValidations.isNotEmptyandNumber(value);
            if (numberValidation) {
              return numberValidation;
            }
            const unit = currentUnit.value;
            if (!unit) {
              return null;
            }
            const birthdateError = validateDurationAgainstBirthdate(value, unit);
            console.log("Birthdate validation result:", birthdateError);
            return birthdateError;
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
            currentUnit.value = unitValue;
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
            return StandardValidations.required(allFormValues?.PresentingComplaints?.name) != null;
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
      if (data.duration && data.duration_unit) {
        console.log("Validating duration against birthdate...");
        const durationError = validateDurationAgainstBirthdate(data.duration, data.duration_unit);
        console.log("Validation result:", durationError);
        if (durationError) {
          toastWarning(durationError);
          return;
        }
      } else {
        console.log("Skipping birthdate validation - missing duration or unit");
      }
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
      checkAHD();
    };
    const checkAHD = () => {
      const triggerSymptoms = ["Cough", "Convulsions"];
      showAHD.value = presentingComplaintsList.value.some((item) => triggerSymptoms.includes(item.name));
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
      if (presentingComplaints2.length <= 0 && latestObs.length <= 0) {
        toastWarning("Presenting complaints is required");
        return false;
      }
      if (presentingComplaints2.length <= 0) return true;
      await ObservationService.addObsToEncounterPatient(presentingComplaints2, EncounterTypeId.PRESENTING_COMPLAINTS);
      toastSuccess("Presenting complaints saved successful");
      presentingComplaintsList.value = [];
      return true;
    };
    onMounted(async () => {
      await getPresentingDataLIst();
    });
    __expose({
      onSubmit
    });
    return (_ctx, _cache) => {
      const _component_ion_row = resolveComponent("ion-row");
      const _component_ion_label = resolveComponent("ion-label");
      const _component_ion_accordion = resolveComponent("ion-accordion");
      const _component_ion_accordion_group = resolveComponent("ion-accordion-group");
      return openBlock(), createElementBlock(Fragment, null, [
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
        search_item.value ? (openBlock(), createBlock(_component_ion_row, { key: 1 }, {
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
        show_btn.value ? (openBlock(), createBlock(_component_ion_row, {
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
        })) : createCommentVNode("", true),
        createVNode(_component_ion_row, null, {
          default: withCtx(() => [
            createVNode(_component_ion_accordion_group, {
              ref_key: "accordionGroup",
              ref: accordionGroup,
              class: "previousView"
            }, {
              default: withCtx(() => [
                createVNode(_component_ion_accordion, {
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

const PresentingComplaints = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-482c7b52"]]);

export { PresentingComplaints as P, _sfc_main$1 as _, _sfc_main$2 as a };
