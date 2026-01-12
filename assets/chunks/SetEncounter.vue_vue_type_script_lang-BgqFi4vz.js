import { O as OrderService, u as useDemographicsStore } from '../index-xpeKIrss.js';
import { m as mapState } from './pinia-C47my0-I.js';
import { q as defineComponent } from './vendor-BK8x96Ok.js';

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
