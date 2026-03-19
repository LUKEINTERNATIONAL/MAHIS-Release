import { O as OrderService, u as useDemographicsStore } from '../index-B8ztKi9t.js';
import { m as mapState } from './pinia-C0lBSi-v.js';
import { s as defineComponent } from './vendor-DvGYa1v4.js';

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
