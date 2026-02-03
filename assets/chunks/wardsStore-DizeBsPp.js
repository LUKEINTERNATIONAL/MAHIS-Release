import { d as defineStore } from './pinia-BZkYQmJa.js';
import { V as LocationService } from '../index-Cl_dwGxG.js';

async function getFacilityWards(filter = "") {
  try {
    const wards = await LocationService.getFacilities({
      name: filter,
      tag: "Facility adult sections"
    });
    return wards.map((ward) => ({
      name: ward.name,
      value: ward.name,
      // Typically the value for a select/dropdown
      other: ward
      // Stores the full original object
    }));
  } catch (err) {
    console.error("Error fetching facility wards:", err);
    return [];
  }
}
const useWardsStore = defineStore("wards", {
  state: () => ({
    wards: [],
    isLoading: false,
    error: null
  }),
  getters: {
    // Getter to easily access the list of wards
    allWards: (state) => state.wards,
    // Getter to check if data is currently being fetched
    isWardsLoading: (state) => state.isLoading
  },
  actions: {
    /**
     * Fetches wards from the service and sets the store state.
     * @param filter - Optional string to filter the wards by name.
     */
    async fetchWards(filter = "") {
      this.isLoading = true;
      this.error = null;
      try {
        const fetchedWards = await getFacilityWards(filter);
        this.wards = fetchedWards;
      } catch (err) {
        this.error = err;
        this.wards = [];
        console.error("Failed to load wards:", err);
      } finally {
        this.isLoading = false;
      }
    },
    /**
     * Resets the store state to its initial values.
     */
    resetStore() {
      this.wards = [];
      this.isLoading = false;
      this.error = null;
    }
  },
  persist: true
});

export { useWardsStore as u };
