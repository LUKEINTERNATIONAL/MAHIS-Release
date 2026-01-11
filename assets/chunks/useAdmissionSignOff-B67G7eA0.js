import { ab as useUserStore, H as HisDate } from '../index-B2p2mVqz.js';
import { w as watch } from './vendor-Cy_N32Zh.js';

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

export { useAdmissionSignOff as u };
