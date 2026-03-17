import { o as createModal } from '../index-DRTgL5PD.js';
import { c as computed, f as ref } from './vendor-E5FFSfhd.js';

function useBabyDetails(modalComponent) {
  const existingBabies = ref([]);
  const newBabies = ref([]);
  const babies = computed(() => existingBabies.value.length > 0 ? existingBabies.value : newBabies.value);
  const isFormLocked = computed(() => existingBabies.value.length > 0);
  const getPersonInfo = (baby) => baby?.personInformation ?? baby;
  const getBabyName = (baby) => {
    const info = getPersonInfo(baby);
    return [info.given_name, info.middle_name, info.family_name].filter(Boolean).join(" ");
  };
  const getBabyGender = (baby) => {
    const g = getPersonInfo(baby).gender;
    if (!g) return "";
    return g === "M" ? "Male" : g === "F" ? "Female" : g;
  };
  const getBabyBirthdate = (baby) => getPersonInfo(baby).birthdate ?? "";
  const getBabyID = (baby) => baby?.ID ?? String(baby?.person_id ?? "") ?? "";
  const getBabyDistrict = (baby) => {
    const info = getPersonInfo(baby);
    return info.home_district || info.current_district || "";
  };
  const getBabyVillage = (baby) => {
    const info = getPersonInfo(baby);
    return info.home_village || info.current_village || "";
  };
  const hasBabyData = (baby) => {
    if (!baby || Object.keys(baby).length === 0) return false;
    const info = getPersonInfo(baby);
    return !!(info.given_name || info.family_name || baby.ID || info.gender || info.birthdate);
  };
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };
  const syncBabySlots = (count) => {
    if (isFormLocked.value) return;
    if (count > newBabies.value.length) {
      const toAdd = count - newBabies.value.length;
      newBabies.value.push(...Array.from({ length: toAdd }, () => ({})));
    } else if (count < newBabies.value.length) {
      newBabies.value = newBabies.value.slice(0, count);
    }
  };
  const mapChildToBaby = (child) => ({
    personInformation: child,
    isExisting: true
  });
  const openBabyModal = async (index, deliveryDate, modalProps = {}) => {
    const activeList = isFormLocked.value ? existingBabies : newBabies;
    const babyData = await createModal(modalComponent, { class: "large-medium-width-modal" }, true, {
      babyIndex: index,
      baby: activeList.value[index],
      deliveryDate,
      isFormLocked: isFormLocked.value,
      ...modalProps
    });
    if (babyData?.saved === false) return;
    if (babyData) {
      activeList.value[index] = babyData;
    }
  };
  const resetBabies = () => {
    existingBabies.value = [];
    newBabies.value = [];
  };
  const resetNewBabies = () => {
    newBabies.value = [];
  };
  return {
    // state
    existingBabies,
    newBabies,
    babies,
    // computed: existingBabies if present, else newBabies
    isFormLocked,
    // computed: true when existingBabies.length > 0
    // accessors
    getBabyName,
    getBabyGender,
    getBabyBirthdate,
    getBabyID,
    getBabyDistrict,
    getBabyVillage,
    hasBabyData,
    // formatting
    formatDate,
    // array management
    syncBabySlots,
    resetBabies,
    resetNewBabies,
    // mapping
    mapChildToBaby,
    // modal
    openBabyModal
  };
}

export { useBabyDetails as u };
