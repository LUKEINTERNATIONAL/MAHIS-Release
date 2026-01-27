import { s as defineComponent, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, bq as pulseOutline, bb as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode } from './vendor-Wwszy5sF.js';
import { n as icons, a_ as List, H as HisDate, K as ObservationService, b0 as iconList, a$ as iconGraph, u as useDemographicsStore, _ as _export_sfc } from '../index-8Y6Qmz3g.js';
import { d as defineStore, m as mapState } from './pinia-BYnbfcrK.js';
import { l as lodashExports } from './lodash-aZqQi0CK.js';

const initialPresentingComplaint = [
  {
    selectedData: [],
    isFinishBtn: false,
    validationStatus: "",
    data: {
      rowData: [
        {
          colData: [
            {
              inputHeader: "Presenting Complaints",
              value: "",
              name: "PresentingComplaints",
              icon: icons.search,
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              isSingleSelect: true,
              trackBy: "concept_id",
              multiSelectData: [],
              idName: "district_id",
              showRefreshButton: true
            },
            {
              inputHeader: "Duration",
              value: "",
              icon: icons.time,
              name: "Duration",
              required: true,
              eventType: "input",
              alertsErrorMassage: "",
              isChangeUnits: true,
              id: "",
              idName: "district_id",
              unitsData: {
                inputHeader: "Duration Units",
                popOver: true,
                icon: icons.search,
                value: null,
                name: "units",
                eventType: "input",
                alertsErrorMassage: "",
                isSingleSelect: true,
                trackBy: "id",
                multiSelectData: [
                  { id: "1", name: "Hours" },
                  { id: "2", name: "Days" },
                  { id: "3", name: "Months" },
                  { id: "4", name: "Years" }
                ],
                id: "",
                idName: "district_id"
              }
            }
          ],
          btns: [
            {
              name: "Save",
              fill: "clear",
              btn_col_size: 3,
              icon: icons.plus
            }
          ]
        }
      ]
    },
    alerts: [
      {
        backgroundColor: "",
        status: "",
        icon: "",
        colSize: "",
        textColor: "",
        value: "",
        name: "",
        index: "",
        justify: "",
        alignText: ""
      }
    ]
  },
  {
    isFinishBtn: false,
    sectionHeader: "",
    data: {
      rowData: [
        {
          colData: [
            {
              class: "",
              displayNone: true,
              inputHeader: "Specify the presenting complaint(s)*",
              value: "",
              icon: icons.editPen,
              name: "Other (specify)",
              valueType: "text",
              eventType: "input",
              alertsErrorMassage: "",
              colSize: "9"
            }
          ]
        }
      ]
    }
  }
];
const usePresentingComplaintsStore = defineStore("PresentingComplaintsStore", {
  state: () => ({
    presentingComplaints: [...initialPresentingComplaint]
  }),
  actions: {
    setPresentingComplaints(data) {
      this.presentingComplaints = data;
    },
    getInitial() {
      const data = lodashExports.cloneDeep(initialPresentingComplaint);
      return [...data];
    }
  },
  persist: true
});

const _sfc_main = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    List
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"]),
    ...mapState(usePresentingComplaintsStore, ["presentingComplaints"])
  },
  data() {
    return {
      valueNumericArray: [],
      obsDatetime: [],
      graphIcon: iconGraph(["#006401"]),
      listIcon: iconList(["#636363"]),
      displayGraph: true,
      orders: [],
      height: [],
      BMI: [],
      iconBg: {},
      activeWeight: [],
      activeHeight: [],
      activeBMI: [],
      list: [],
      series: [
        {
          name: "",
          data: []
        }
      ]
    };
  },
  setup() {
    return { checkmark, pulseOutline };
  },
  watch: {
    $router: {
      async handler() {
      },
      immediate: true,
      deep: true
    },
    patient: {
      async handler() {
      },
      deep: true
    }
  },
  async mounted() {
  },
  methods: {
    async updateList() {
      const obs = await ObservationService.getAll(this.patient.patientID, "Presenting complaint");
      const presentingComplaint = !lodashExports.isEmpty(obs) ? Promise.all(
        obs.map(async (ob) => {
          if (ob.value_coded) {
            return {
              name: await ObservationService.getConceptName(ob["value_coded"]),
              obs_date: ob.obs_datetime,
              duration: ob.children[0].value_text
            };
          } else {
            return [];
          }
        })
      ) : [];
      this.setListData(await presentingComplaint);
    },
    setListData(data) {
      this.list = [];
      this.list.push({
        actionBtn: false,
        class: "col_background",
        header: true,
        minHeight: "--min-height: 20px;",
        containSize: 4,
        display: ["Date", "Presenting Complains", "Duration"]
      });
      data.forEach((item) => {
        this.list.push({
          actionBtn: false,
          minHeight: "--min-height:20px;",
          class: "col_background",
          containSize: 4,
          display: [HisDate.toStandardHisFormat(item.obs_date), item.name, item.duration]
        });
      });
    }
  }
});

const _hoisted_1 = { class: "modal_wrapper" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_list = resolveComponent("list");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      createVNode(_component_list, { listData: _ctx.list }, null, 8, ["listData"])
    ])
  ]);
}
const previousComplaints = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6340505f"]]);

export { previousComplaints as p, usePresentingComplaintsStore as u };
