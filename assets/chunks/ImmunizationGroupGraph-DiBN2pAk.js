import { s as defineComponent, bL as m, aC as IonToolbar, aD as IonTitle, aE as IonMenu, ao as IonList, ap as IonItem, I as IonHeader, aF as IonContent, K as modalController, bq as pulseOutline, bb as checkmark, x as resolveComponent, y as openBlock, z as createElementBlock, C as createBaseVNode, A as createVNode } from './vendor-BIA1Qh8a.js';
import { a_ as List, H as HisDate, a$ as iconGraph, b0 as iconList, u as useDemographicsStore, _ as _export_sfc } from '../index-DJyJhMgX.js';
import { m as mapState } from './pinia-BgytB2RM.js';

const _sfc_main$1 = defineComponent({
  name: "Menu",
  components: {
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonMenu,
    IonTitle,
    IonToolbar,
    ApexChart: m,
    List
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  data() {
    return {
      valueNumericArray: [],
      obsDatetime: [],
      graphIcon: iconGraph(["#006401"]),
      listIcon: iconList(["#636363"]),
      displayGraph: true,
      weight: [],
      height: [],
      BMI: [],
      iconBg: {},
      activeWeight: [],
      activeHeight: [],
      activeBMI: [],
      list: [],
      options: {
        chart: {
          id: "immunization"
        },
        fill: {
          colors: ["#016302"],
          // Using the initial color from the gradient
          type: "gradient",
          gradient: {
            type: "vertical",
            shadeIntensity: 0.1,
            opacityFrom: 0.9,
            opacityTo: 0.6,
            stops: [0, 80, 0]
            // Adjusted stops to make the top darker
          }
        },
        stroke: {
          curve: "straight",
          colors: ["#006401"],
          // Specify the color you want for the line on top of the area
          width: 1
          // Set the width of the line
        },
        dataLabels: {
          enabled: false
        },
        yaxis: {
          min: 0,
          forceNiceScale: true
        },
        xaxis: {
          categories: []
        }
      },
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
  props: {
    reportData: {
      default: []
    }
  },
  watch: {
    reportData: {
      handler() {
        this.setData();
      },
      deep: true
    }
  },
  async mounted() {
    this.setData();
    this.iconBg.graph = "iconBg";
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    handleIcon() {
    },
    toggleDisplay(status) {
      this.displayGraph = status;
      if (this.displayGraph) {
        this.graphIcon = iconGraph(["#006401"]);
        this.listIcon = iconList(["#636363"]);
        this.iconBg.graph = "iconBg";
        this.iconBg.list = "";
      } else {
        this.graphIcon = iconGraph(["#636363"]);
        this.listIcon = iconList(["#006401"]);
        this.iconBg.graph = "";
        this.iconBg.list = "iconBg";
      }
    },
    setActivClass(active) {
      this.activeHeight = "";
      this.activeBMI = "";
      this.activeWeight = "";
      if (active == "height") this.activeHeight = "_active";
      else if (active == "weight") this.activeWeight = "_active";
      else if (active == "BMI") this.activeBMI = "_active";
    },
    setData() {
      if (this.reportData?.vaccination_counts_by_month?.months) {
        this.series[0].data = this.reportData?.vaccination_counts_by_month?.vaccinations;
        this.series[0].name = "Total";
        this.options = {
          ...this.options,
          ...{
            xaxis: {
              categories: this.reportData?.vaccination_counts_by_month?.months
            }
          }
        };
      }
    },
    setListData(data) {
      this.list = [];
      this.list.push({
        actionBtn: false,
        class: "col_background",
        header: true,
        minHeight: "--min-height: 25px;",
        display: ["Date", "Measure"]
      });
      data.forEach((item) => {
        this.list.push({
          actionBtn: false,
          minHeight: "--min-height: 25px;",
          class: "col_background",
          display: [HisDate.toStandardHisFormat(item.obs_datetime), item.value_numeric]
        });
      });
    }
  }
});

const _hoisted_1$1 = { class: "modal_wrapper" };
const _hoisted_2$1 = { class: "immunizationGraph" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ApexChart = resolveComponent("ApexChart");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "immunizationGraphText" }, "Immunization Graphs", -1)),
      createVNode(_component_ApexChart, {
        width: "100%",
        height: "100%",
        type: "bar",
        options: _ctx.options,
        series: _ctx.series
      }, null, 8, ["options", "series"])
    ])
  ]);
}
const ImmunizationTrendsGraph = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6fdf4353"]]);

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
    ApexChart: m,
    List
  },
  computed: {
    ...mapState(useDemographicsStore, ["patient"])
  },
  data() {
    return {
      valueNumericArray: [],
      obsDatetime: [],
      graphIcon: iconGraph(["#006401"]),
      listIcon: iconList(["#636363"]),
      displayGraph: true,
      weight: [],
      height: [],
      BMI: [],
      iconBg: {},
      activeWeight: [],
      activeHeight: [],
      activeBMI: [],
      list: [],
      options: {
        chart: {
          id: "vuechart-example"
        },
        fill: {
          colors: ["#006401"],
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        stroke: {
          curve: "straight",
          colors: ["#006401"],
          // Specify the color you want for the line on top of the area
          width: 2
          // Set the width of the line
        },
        markers: {
          size: 3,
          // Set the size of the dots
          colors: ["#006401"],
          strokeColors: ["#006401"],
          hover: {
            size: 5,
            sizeOffset: 3
          }
        },
        dataLabels: {
          enabled: false
        },
        grid: {
          show: true,
          borderColor: "#B3B3B3",
          strokeDashArray: 4,
          position: "front",
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: "",
            opacity: 0.5
          },
          column: {
            colors: "",
            opacity: 0.5
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        yaxis: {
          min: 0,
          forceNiceScale: true
        }
      },
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
  async mounted() {
    this.setData();
    this.iconBg.graph = "iconBg";
  },
  methods: {
    dismiss() {
      modalController.dismiss();
    },
    handleIcon() {
    },
    toggleDisplay(status) {
      this.displayGraph = status;
      if (this.displayGraph) {
        this.graphIcon = iconGraph(["#006401"]);
        this.listIcon = iconList(["#636363"]);
        this.iconBg.graph = "iconBg";
        this.iconBg.list = "";
      } else {
        this.graphIcon = iconGraph(["#636363"]);
        this.listIcon = iconList(["#006401"]);
        this.iconBg.graph = "";
        this.iconBg.list = "iconBg";
      }
    },
    setActivClass(active) {
      this.activeHeight = "";
      this.activeBMI = "";
      this.activeWeight = "";
      if (active == "height") this.activeHeight = "_active";
      else if (active == "weight") this.activeWeight = "_active";
      else if (active == "BMI") this.activeBMI = "_active";
    },
    setData() {
      this.series[0].data = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
      this.series[0].name = "Total";
      this.options = {
        ...this.options,
        ...{
          xaxis: {
            categories: [
              "Birth",
              "6 Weeks",
              "10 Weeks",
              "14 Weeks",
              "5-22 Months",
              "1-5 Years",
              "9-14 Years",
              "12 Year",
              "15 Years",
              "Above 18 Year"
            ]
          }
        }
      };
    },
    setListData(data) {
      this.list = [];
      this.list.push({
        actionBtn: false,
        class: "col_background",
        header: true,
        minHeight: "--min-height: 25px;",
        display: ["Date", "Measure"]
      });
      data.forEach((item) => {
        this.list.push({
          actionBtn: false,
          minHeight: "--min-height: 25px;",
          class: "col_background",
          display: [HisDate.toStandardHisFormat(item.obs_datetime), item.value_numeric]
        });
      });
    }
  }
});

const _hoisted_1 = { class: "modal_wrapper" };
const _hoisted_2 = { class: "immunizationGraph" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ApexChart = resolveComponent("ApexChart");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "immunizationGraphText" }, "Immunization Graphs", -1)),
      createVNode(_component_ApexChart, {
        width: "100%",
        height: "100%",
        type: "area",
        options: _ctx.options,
        series: _ctx.series
      }, null, 8, ["options", "series"])
    ])
  ]);
}
const ImmunizationGroupGraph = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4a2455f0"]]);

export { ImmunizationGroupGraph as I, ImmunizationTrendsGraph as a };
