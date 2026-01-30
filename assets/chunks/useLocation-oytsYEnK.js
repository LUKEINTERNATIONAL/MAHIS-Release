import { f as useStatusStore, S as Service, V as LocationService, g as getPouchDBRecords } from '../index-DB91Rv2f.js';
import { w as watch, c as computed, f as ref } from './vendor-D7CYpxMc.js';

function useLocation() {
  const districtList = ref([]);
  const TAs = ref([]);
  const villages = ref([]);
  const countriesList = ref([]);
  const countryID = ref(null);
  const facilityList = ref([]);
  const locations = ref([]);
  const selectedDistrictId = ref(null);
  const selectedTraditionalAuthorityId = ref(null);
  const isLoading = ref(false);
  const statusStore = useStatusStore();
  const apiStatus = computed(() => statusStore.apiStatus);
  watch(selectedDistrictId, async (newDistrictId) => {
    if (newDistrictId) {
      try {
        TAs.value = await getTAs(newDistrictId);
      } catch (error) {
        TAs.value = [];
      }
    } else {
      TAs.value = [];
    }
  });
  watch(selectedTraditionalAuthorityId, async (newSelectedTraditionalAuthorityId) => {
    if (newSelectedTraditionalAuthorityId) {
      try {
        villages.value = await getVillages(newSelectedTraditionalAuthorityId);
      } catch (error) {
        villages.value = [];
      }
    } else {
      villages.value = [];
    }
  });
  const getVillages = async (targetId) => {
    try {
      if (Service.getAPIStatus() && !Service.getLanConnectionStatus() && !Service.getPouchDbStatus()) {
        return await LocationService.getVillages(targetId);
      } else {
        const offlineVillage = await getPouchDBRecords("villages", {
          selector: {
            traditional_authority_id: targetId
          }
        });
        return offlineVillage;
      }
    } catch (error) {
      console.error("Error getting villages:", error);
      return [];
    }
  };
  const getTAs = async (targetId) => {
    try {
      if (Service.getAPIStatus() && !Service.getLanConnectionStatus() && !Service.getPouchDbStatus()) {
        return await LocationService.getTraditionalAuthorities(targetId);
      } else {
        const offlineTA = await getPouchDBRecords("traditional_authorities", {
          selector: {
            district_id: targetId
          }
        });
        return offlineTA;
      }
    } catch (error) {
      console.error("Error getting TAs:", error);
      return [];
    }
  };
  const getDistricts = async () => {
    isLoading.value = true;
    try {
      if (Service.getAPIStatus() && !Service.getLanConnectionStatus() && !Service.getPouchDbStatus()) {
        for (let i of [1, 2, 3]) {
          const districts = await LocationService.getDistricts(i);
          districtList.value.push(...districts);
        }
      } else districtList.value = await getPouchDBRecords("districts", { selector: { region_id: { $ne: 4 } } });
      return districtList.value;
    } catch (error) {
      console.error("Error loading location data:", error);
    } finally {
      isLoading.value = false;
    }
  };
  const getCountries = async () => {
    isLoading.value = true;
    try {
      if (Service.getAPIStatus() && !Service.getLanConnectionStatus() && !Service.getPouchDbStatus())
        countriesList.value = await LocationService.getDistricts(4);
      else countriesList.value = await getPouchDBRecords("districts", { selector: { region_id: 4 } });
      return countriesList.value;
    } catch (error) {
      console.error("Error loading location data:", error);
    } finally {
      isLoading.value = false;
    }
  };
  const getCountryID = async (name) => {
    let countryData;
    if (Service.getAPIStatus() && !Service.getLanConnectionStatus() && !Service.getPouchDbStatus())
      countryData = await LocationService.getDistricts(4, name);
    else {
      countryData = await getPouchDBRecords("countries", { selector: { region_id: 4, name } });
    }
    countryID.value = countryData[0].district_id;
  };
  const getFacilities = async () => {
    facilityList.value = await LocationService.getAllFacilities();
  };
  return {
    // State
    districtList,
    countriesList,
    locations,
    isLoading,
    selectedDistrictId,
    TAs,
    villages,
    selectedTraditionalAuthorityId,
    facilityList,
    countryID,
    // Computed
    apiStatus,
    // Methods
    getVillages,
    getTAs,
    getDistricts,
    getCountries,
    getFacilities,
    getCountryID
  };
}

export { useLocation as u };
