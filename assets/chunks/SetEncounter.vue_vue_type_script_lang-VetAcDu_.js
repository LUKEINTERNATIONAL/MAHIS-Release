import { O as OrderService, u as useDemographicsStore } from '../index-CdgBgDcL.js';
import { m as mapState } from './pinia-3T0xmcrW.js';
import { s as defineComponent } from './vendor-DEu2hKw1.js';

const _sfc_main = defineComponent({
  data: () => ({
    userRole: "",
    ready: false,
    labOrders: {}
  }),
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  watch: {
    $route: {
      async handler(route) {
        this.labOrders = await OrderService.getOrders(this.patient.patientID);
      },
      immediate: true,
      deep: true
    }
  }
});

export { _sfc_main as _ };
