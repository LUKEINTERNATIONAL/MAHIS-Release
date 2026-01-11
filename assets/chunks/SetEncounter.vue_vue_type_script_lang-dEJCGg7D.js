import { O as OrderService, u as useDemographicsStore } from '../index-CZxb0S4T.js';
import { m as mapState } from './pinia-Bqc2Rgok.js';
import { q as defineComponent } from './vendor-Cy_N32Zh.js';

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
