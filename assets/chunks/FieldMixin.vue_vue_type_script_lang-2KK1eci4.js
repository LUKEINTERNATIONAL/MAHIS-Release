import { s as defineComponent } from './vendor-74dOmGLc.js';

const _sfc_main = defineComponent({
  emits: [
    "onValue",
    "onFieldActivated"
  ],
  props: {
    config: {
      type: Object,
      default: () => ({})
    },
    preset: {
      type: Object,
      default: () => ({
        label: "",
        value: ""
      })
    },
    defaultValue: {
      type: Function
    },
    fdata: {
      type: Object,
      required: true
    },
    cdata: {
      type: Object,
      required: true
    },
    clear: {
      type: Number,
      required: true
    },
    options: {
      type: Function,
      default: () => []
    },
    activationState: {
      type: String,
      default: ""
    },
    onValue: {
      type: Function
    },
    onValueUpdate: {
      type: Function
    },
    footerButtonEvent: {
      type: Object
    }
  }
});

export { _sfc_main as _ };
