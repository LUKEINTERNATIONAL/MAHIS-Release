import { ct as useRoute, w as watch, f as ref } from './vendor-6OQ3r7Vr.js';
import { e as useGeneralStore, S as Service, U as UserService } from '../index-CgCYPred.js';
import { s as storeToRefs } from './pinia-BATJJgGh.js';

function useUserActivities() {
  const route = useRoute();
  const generalStore = useGeneralStore();
  const ready = ref(false);
  const { OPDActivities, NCDActivities, ARTActivities, OPDWaitingLists } = storeToRefs(generalStore);
  const getUserData = async (property) => {
    try {
      const userID = Service.getUserID();
      if (!userID) {
        console.warn(`User ID not available for property: ${property}`);
        return [];
      }
      const userData = await UserService.getJson("user_properties", {
        user_id: userID,
        property
      });
      if (userData?.property_value) {
        return userData.property_value.split(",").map((item) => item.trim()).filter((item) => item.length > 0);
      }
      return [];
    } catch (error) {
      console.error(`Error fetching user data for property '${property}':`, error);
      return [];
    }
  };
  const getUserActivities = async (activities) => {
    return getUserData(activities);
  };
  const updateActivitiesAndWaitingLists = async () => {
    try {
      ready.value = false;
      const [opdActivities, ncdActivities, artActivities, opdWaitingLists] = await Promise.all([
        getUserData("OPD_activities"),
        getUserData("NCD_activities"),
        getUserData("ART_Admin_assigned_activities"),
        getUserData("OPD_waiting_list")
      ]);
      if (opdActivities.length > 0) {
        generalStore.setOPDActivity(opdActivities);
      }
      if (ncdActivities.length > 0) {
        generalStore.setNCDActivity(ncdActivities);
      }
      if (artActivities.length > 0) {
        generalStore.setARTActivity(artActivities);
      }
      if (opdWaitingLists.length > 0) {
        generalStore.setOPDWaitingLists(opdWaitingLists);
      } else {
        console.warn("Offline or empty API response — keeping cached OPDWaitingLists");
      }
    } catch (error) {
      console.error("Error updating activities and waiting lists:", error);
    } finally {
      ready.value = true;
    }
  };
  const updateActivities = async () => {
    return updateActivitiesAndWaitingLists();
  };
  const hasWaitingList = (waitingListName) => {
    return OPDWaitingLists.value.includes(waitingListName);
  };
  const hasActivity = (activityName, program = "OPD") => {
    const activities = { OPD: OPDActivities.value, NCD: NCDActivities.value, ART: ARTActivities.value };
    return activities[program]?.includes(activityName) || false;
  };
  const refreshUserData = async () => {
    await updateActivitiesAndWaitingLists();
  };
  watch(
    () => route,
    async () => {
      await updateActivitiesAndWaitingLists();
    },
    { immediate: true, deep: true }
  );
  return {
    // State
    ready,
    OPDActivities,
    NCDActivities,
    ARTActivities,
    OPDWaitingLists,
    // Methods
    getUserData,
    getUserActivities,
    updateActivitiesAndWaitingLists,
    updateActivities,
    hasWaitingList,
    hasActivity,
    refreshUserData
  };
}

export { useUserActivities as u };
