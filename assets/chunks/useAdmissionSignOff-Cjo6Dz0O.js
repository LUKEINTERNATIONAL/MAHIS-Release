import { a6 as useUserStore, H as HisDate } from '../index-zZBkpFP3.js';
import { w as watch } from './vendor-6OQ3r7Vr.js';

const signoffSections = [
  {
    title: "Admission Sign-Off",
    subtitle: "Your details will be auto populated. Please confirm.",
    formData: [
      {
        componentType: "inputField",
        header: "Healthcare Worker/Student ID",
        name: "healthcareWorkerId",
        placeholder: "Enter your ID",
        validation: (value) => value ? null : "Healthcare Worker/Student ID is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Electronic Signature",
        name: "electronicSignature",
        placeholder: "Certified User Name",
        validation: (value) => value ? null : "Electronic signature is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "inputField",
        header: "Role/Cadre",
        name: "userRole",
        placeholder: "Your role",
        validation: (value) => value ? null : "Role/Cadre is required",
        disabled: true,
        padding: true
      },
      {
        componentType: "dateInputField",
        header: "Date & Time",
        name: "signOffDate",
        validation: (value) => value ? null : "Date & Time is required",
        disabled: true,
        padding: true
      }
    ]
  },
  {
    title: "Print Summary",
    subtitle: "Print admission summary for your records.",
    formData: [
      {
        componentType: "Slot",
        name: "printSlot",
        slotName: "printSection"
      }
    ]
  }
];
const neonatalAdmissionSignOffSections = signoffSections;

function useAdmissionSignOff(formRef) {
  const userStore = useUserStore();
  const populateSignOffData = () => {
    if (!formRef.value || !userStore.user) {
      return null;
    }
    const updates = {
      healthcareWorkerId: userStore.user.username || "",
      electronicSignature: getFullName(),
      userRole: getUserRole(),
      signOffDate: HisDate.currentDate()
    };
    Object.entries(updates).forEach(([field, value]) => {
      if (formRef.value.setFormValue) {
        formRef.value.setFormValue(field, value);
      }
    });
    return updates;
  };
  const getFullName = () => {
    if (!userStore.user) return "";
    const nameParts = [
      userStore.user.given_name,
      userStore.user.family_name
    ].filter(Boolean);
    return nameParts.length > 0 ? nameParts.join(" ") : userStore.user.username || "";
  };
  const getUserRole = () => {
    return userStore.user?.user_type || "Clinician";
  };
  watch(
    () => formRef.value,
    (instance) => {
      if (instance && instance.setFormValue) {
        setTimeout(() => {
          populateSignOffData();
        }, 100);
      }
    },
    { immediate: true }
  );
  watch(
    () => userStore.user,
    (newUser) => {
      if (newUser && formRef.value) {
        populateSignOffData();
      }
    },
    { deep: true }
  );
  return {
    populateSignOffData,
    userStore,
    getFullName,
    getUserRole
  };
}

export { neonatalAdmissionSignOffSections as n, useAdmissionSignOff as u };
