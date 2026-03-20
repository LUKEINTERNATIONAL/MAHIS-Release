import { P as PatientService, S as Service, J as savePatientRecord, z as StandardForm, F as DynamicButton, r as StandardModal, C as useExposeFromStandardForm, t as toastWarning, K as ObservationService, b as EncounterTypeId, G as toastSuccess, y as StandardValidations, o as createModal, ao as router } from '../index-Z2o_UQpn.js';
import { s as defineComponent, aM as useRouter, y as openBlock, O as createBlock, B as withCtx, C as createBaseVNode, A as createVNode, z as createElementBlock, F as unref, L as IonIcon, ew as warning, a5 as createTextVNode, H as createCommentVNode, c as computed, K as modalController } from './vendor-D71W8bKc.js';

class EnrollmentService {
  static async getEnrollments() {
    const patient = new PatientService().getObj();
    const activePrograms = patient.activePrograms || [];
    return activePrograms.some((program) => program.program_id === Service.getProgramID());
  }
  static async createEnrollment(patientId = "") {
    const enrollments = await this.getEnrollments();
    if (enrollments?.length <= 0) {
      return;
    }
    const enrollmentData = {
      program_id: Service.getProgramID(),
      date_enrolled: Service.getSessionDate(),
      location_id: Service.getUserID(),
      patient_id: patientId || Service.getPatientID(),
      status: "unsaved"
    };
    const patient = new PatientService().getObj();
    patient.activePrograms = [...patient.activePrograms || [], enrollmentData];
    await savePatientRecord(patient);
  }
}

const _hoisted_1 = {
  key: 0,
  class: "underage-warning"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AncEnrollmentModal",
  props: {
    isOpen: { type: Boolean },
    closeModalFunc: {},
    onYes: {},
    onNo: {},
    title: {},
    showUnderageWarning: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const warningIcon = warning;
    const { formRef } = useExposeFromStandardForm();
    const router = useRouter();
    const confirmPregnancyFormData = computed(() => {
      return [
        {
          componentType: "radioButtonField",
          name: "Pregnancy confirmed",
          header: "Is the pregnancy confirmed?",
          type: "inline",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: StandardValidations.required
        },
        {
          componentType: "radioButtonField",
          name: "Pregnancy planned",
          header: "Was the pregnancy planned?",
          type: "inline",
          condition: (data) => data["Pregnancy confirmed"] == "Yes",
          obsValueType: "value_coded",
          options: [
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" }
          ],
          validation: StandardValidations.required
        }
      ];
    });
    const OnSubmit = async () => {
      if (formRef.value?.validateForm() == null) {
        const data = formRef.value?.getFormValues();
        if (!data) return;
        if (data["Pregnancy confirmed"] == "No") {
          toastWarning("Pregnancy is not confirmed. Please confirm pregnancy before enrolling in the program.");
          modalController.dismiss();
          return;
        }
        if (await ObservationService.buildSaveObs(data, EncounterTypeId.ANC_ENROLLMENT)) {
          await EnrollmentService.createEnrollment();
          toastSuccess("Enrollment in ANC program successful");
          modalController.dismiss();
          router.push("/anc/profile");
          return;
        }
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(StandardModal, {
        title: "Enroll client in ANC program",
        subtitle: ""
      }, {
        "top-buttons": withCtx(() => [
          createVNode(DynamicButton, {
            name: "Submit",
            onClick: OnSubmit,
            fill: "solid",
            class: "submit-button"
          })
        ]),
        content: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(StandardForm, {
              formData: confirmPregnancyFormData.value,
              ref_key: "formRef",
              ref: formRef
            }, null, 8, ["formData"]),
            props.showUnderageWarning ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(unref(IonIcon), {
                icon: unref(warningIcon),
                class: "warning-icon"
              }, null, 8, ["icon"]),
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "warning-text" }, [
                createBaseVNode("strong", null, "Warning:"),
                createTextVNode(" The client you are enrolling is below 9 years of age.")
              ], -1))
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      });
    };
  }
});

const ANCRedirection = async () => {
  const enrollmentData = await ObservationService.getObsByEncounterId(EncounterTypeId.ANC_ENROLLMENT);
  const hasQuickCheckData = await ObservationService.getObsByEncounterIdAndDate(EncounterTypeId.QUICK_CHECK);
  const obstetricHistory = await ObservationService.getObsByEncounterId(EncounterTypeId.OBSTETRIC_HISTORY);
  const medicalHistory = await ObservationService.getObsByEncounterId(EncounterTypeId.MEDICAL_HISTORY);
  const currentPregnancy = await ObservationService.getObsByEncounterId(EncounterTypeId.CURRENT_PREGNANCY);
  const obstetricsGynecology = await ObservationService.getObsByEncounterId(EncounterTypeId.Obstetrics_and_Gynecology);
  const medications = await ObservationService.getObsByEncounterId(EncounterTypeId.MEDICATIONS);
  const WomanBehaviour = await ObservationService.getObsByEncounterId(EncounterTypeId.WOMAN_BEHAVIOUR);
  const latestEnrollmentObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.ANC_ENROLLMENT);
  const latestOutcomeObs = await ObservationService.getLatestObsByEncounterId(EncounterTypeId.PREGNANT_OUTCOME);
  const latestEnrollmentObsDate = latestEnrollmentObs?.[0]?.obs_datetime ? new Date(latestEnrollmentObs[0].obs_datetime) : null;
  const latestOutcomeObsDate = latestOutcomeObs?.[0]?.obs_datetime ? new Date(latestOutcomeObs[0].obs_datetime) : null;
  const visitData = [...obstetricHistory, ...medicalHistory, ...currentPregnancy, ...obstetricsGynecology, ...medications, ...WomanBehaviour];
  const hasEnrollmentData = enrollmentData.some((item) => item.obs && item.obs.length > 0);
  const hasVisitData = visitData.some((item) => item.obs && item.obs.length > 0);
  const shouldShowEnrollmentModal = !hasEnrollmentData || latestOutcomeObsDate && latestEnrollmentObsDate && latestOutcomeObsDate > latestEnrollmentObsDate;
  if (shouldShowEnrollmentModal) {
    await createModal(_sfc_main, { class: "small-confirm-modal " });
  } else if (!hasVisitData) {
    router.push("/anc/profile");
  } else if (hasQuickCheckData <= 0) {
    router.push("/anc/quick-check");
  } else {
    router.push("/anc/home");
  }
};
const isQuickCheckCompleted = async () => {
  const quickCheckData = await ObservationService.getObsByEncounterId(EncounterTypeId.QUICK_CHECK);
  return quickCheckData.some((item) => item.obs && item.obs.length > 0);
};

export { ANCRedirection as A, isQuickCheckCompleted as i };
