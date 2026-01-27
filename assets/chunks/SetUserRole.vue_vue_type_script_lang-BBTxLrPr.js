import { S as Service } from '../index-8Y6Qmz3g.js';
import { s as defineComponent } from './vendor-Wwszy5sF.js';

const _sfc_main = defineComponent({
  data: () => ({
    userRole: "",
    ready: false,
    userRoleSettings: {}
  }),
  watch: {
    $route: {
      async handler(route) {
        this.userRole = Service.getUserRoles();
        const programID = Service.getProgramID();
        const programName = Service.getProgramName();
        if (this.userRole == "Lab" && programID == 14) {
          this.userRoleSettings = {
            url: "home",
            btnName: "Back to home",
            stepperTitle: "Laboratory"
          };
        }
        if (programID == 14 && this.userRole != "Lab") {
          this.userRoleSettings = {
            url: "home",
            btnName: "Go to waiting list",
            stepperTitle: "Consultation Plan"
          };
        }
        if (programID == 12) {
          this.userRoleSettings = {
            url: "/labour/home",
            btnName: "Back"
          };
        }
        if (programName == "LABOUR AND DELIVERY PROGRAM") {
          this.userRoleSettings = {
            url: "labourHome",
            btnName: "Back to home"
          };
        }
        if (programName == "PNC PROGRAM") {
          this.userRoleSettings = {
            url: "pnc/home",
            btnName: "Back to home"
          };
        }
      },
      immediate: true,
      deep: true
    }
  }
});

export { _sfc_main as _ };
