import { i as img } from './Img-RarZMYTn.js';
import { v as defineComponent, a8 as IonLabel, ap as IonItem, eN as IonThumbnail, bL as IonCard, c as computed, y as resolveComponent, z as openBlock, P as createBlock, C as withCtx, B as createVNode, D as createBaseVNode, A as createElementBlock, E as toDisplayString, J as createCommentVNode, a5 as normalizeClass } from './vendor-D3hawxEQ.js';
import { _ as _export_sfc, S as Service } from '../index-Bbe_kZm7.js';

const _sfc_main = defineComponent({
  components: {
    IonCard,
    IonThumbnail,
    IonItem,
    IonLabel
  },
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    taskDisabled: {
      type: Boolean,
      required: false
    },
    taskCompleted: {
      type: Boolean,
      required: false
    }
  },
  setup(props) {
    const isCompleted = typeof props.taskCompleted === "boolean" ? props.taskCompleted : false;
    const isDisabled = typeof props.taskDisabled === "boolean" ? props.taskDisabled : false;
    const activeIcon = computed(() => {
      if (isDisabled) {
        return img("Disabled.svg");
      } else if (isCompleted) {
        return img("Checkmark.svg");
      } else {
        return props.icon;
      }
    });
    return {
      activeIcon,
      isDisabled,
      isCompleted
    };
  },
  methods: {
    loadImage(name) {
      return img(name);
    }
  }
});

const _hoisted_1 = ["src"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ion_thumbnail = resolveComponent("ion-thumbnail");
  const _component_ion_label = resolveComponent("ion-label");
  const _component_ion_item = resolveComponent("ion-item");
  const _component_ion_card = resolveComponent("ion-card");
  return openBlock(), createBlock(_component_ion_card, {
    class: normalizeClass(["his-card task-card", {
      "clickable": !_ctx.isDisabled,
      "disabled": _ctx.isDisabled
    }])
  }, {
    default: withCtx(() => [
      createVNode(_component_ion_item, { lines: "none" }, {
        default: withCtx(() => [
          createVNode(_component_ion_thumbnail, { slot: "start" }, {
            default: withCtx(() => [
              createBaseVNode("img", {
                src: _ctx.loadImage(_ctx.activeIcon)
              }, null, 8, _hoisted_1)
            ]),
            _: 1
          }),
          createVNode(_component_ion_label, {
            class: "his-sm-text ion-text-wrap",
            style: { "font-weight": "600", "color": "#333!important" }
          }, {
            default: withCtx(() => [
              !_ctx.isCompleted ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true),
              _ctx.isCompleted ? (openBlock(), createElementBlock("s", _hoisted_3, toDisplayString(_ctx.title), 1)) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["class"]);
}
const TaskCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-75994c96"]]);

const centralHospitals = [
  "Queen Elizabeth Central Hospital",
  "Kamuzu Central Hospital",
  "Mzuzu Central Hospital",
  "Zomba Central Hospital"
];
function isFacilictyCentralHospital() {
  for (const name of centralHospitals) {
    if (name == Service.getLocationName()) {
      return true;
    }
  }
  return false;
}
const REPORTS = [
  {
    name: "MoH",
    icon: "login-logos/Malawi-Coat_of_arms_of_arms.png",
    defaultFilesIcon: "reports.png",
    condition: () => true,
    files: [
      {
        name: "LA report",
        pathName: "moh_la",
        condition: () => false
      },
      {
        name: "Drug report",
        pathName: "moh_drug",
        condition: () => false
      },
      {
        name: "Malaria report",
        pathName: "moh_malaria",
        condition: () => true
      },
      {
        name: "IPT",
        pathName: "moh_ipt",
        condition: () => false
      },
      {
        name: "IDSR Weekley Report",
        pathName: "idsr_weekly"
      },
      {
        name: "IDSR Monthly Report",
        pathName: "idsr_monthly"
      },
      {
        name: "HMIS 15 Report",
        pathName: "hmis_15",
        condition: () => !isFacilictyCentralHospital()
      },
      {
        name: "HMIS 17 Report",
        pathName: "hmis_17",
        condition: () => isFacilictyCentralHospital()
      }
    ]
  },
  {
    name: "Clinic",
    icon: "reports.png",
    defaultFilesIcon: "reports.png",
    files: [
      {
        name: "Diagnosis by address",
        pathName: "clinic_diagnosis_by_address"
      },
      {
        name: "Diagnosis",
        pathName: "clinic_diagnosis"
      },
      {
        name: "Registration report",
        pathName: "clinic_registration"
      },
      {
        name: "LA report",
        pathName: "clinic_la"
      },
      {
        name: "Cases seen report",
        pathName: "clinic_cases_seen"
      },
      {
        name: "Mental health report",
        pathName: "clinic_mental_health"
      },
      {
        name: "Drugs Report",
        pathName: "clinic_drugs_given"
      },
      {
        name: "With NIDs",
        pathName: "clinic_with_nids"
      }
    ]
  }
];

export { REPORTS as R, TaskCard as T };
