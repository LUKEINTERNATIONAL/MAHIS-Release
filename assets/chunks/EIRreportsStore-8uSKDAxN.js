import { d as defineStore } from './pinia-L6vL2rFe.js';

const EIRreportsStore = defineStore("EIRreportsStore", {
  state: () => ({
    navigationPayload: {},
    start_date: "",
    end_date: "",
    immunizationMonthlyRepoartData: [],
    AEFIReportData: {}
  }),
  actions: {
    setNavigationPayload(title, canGoBack, canGoForward, backHref, previousRoute, subTxt = "") {
      const data = {
        title,
        canGoBack,
        canGoForward,
        backHref,
        previousRoute,
        subTxt
      };
      this.navigationPayload = data;
    },
    setStartAndEndDates(startDate, endDate) {
      this.start_date = startDate;
      this.end_date = endDate;
    },
    setImmunizationMonthlyRepoartData(data) {
      this.immunizationMonthlyRepoartData = data;
    },
    setAEFIReportData(data) {
      this.AEFIReportData = data;
    }
  },
  persist: true
});

export { EIRreportsStore as E };
