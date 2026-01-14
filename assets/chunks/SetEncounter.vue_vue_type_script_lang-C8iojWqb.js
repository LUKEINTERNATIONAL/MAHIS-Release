import { O as OrderService, u as useDemographicsStore } from '../index-BaBlba8w.js';
import { m as mapState } from './pinia-D-q2_lrU.js';
import { q as defineComponent } from './vendor-BPW-J91F.js';

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
