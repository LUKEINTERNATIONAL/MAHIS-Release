import { O as OrderService, u as useDemographicsStore } from '../index-sJH04w5l.js';
import { m as mapState } from './pinia-CQqO6Z-U.js';
import { s as defineComponent } from './vendor-D6qwBKnY.js';

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
