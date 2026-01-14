import { O as OrderService, u as useDemographicsStore } from '../index-D_1ZD1MC.js';
import { m as mapState } from './pinia-Bmkga1nW.js';
import { q as defineComponent } from './vendor-DGIzCW4f.js';

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
