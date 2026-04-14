import { O as OrderService, u as useDemographicsStore } from '../index-D3ME6BhP.js';
import { m as mapState } from './pinia-eByuf_Uz.js';
import { s as defineComponent } from './vendor-CXFd4I0A.js';

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
